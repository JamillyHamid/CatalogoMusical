import flash from 'connect-flash';
import express from 'express';
import { engine } from 'express-handlebars';
import session from 'express-session';
import methodOverride from 'method-override';
import path from 'path';
import { fileURLToPath } from 'url';
import { initialize, sequelize } from './dbconfig.js';
//import candidato from './routes/candidato.js';
//import empresa from './routes/empresa.js';
import index from './routes/index.js';

const app = express();

app.use(methodOverride('_method'));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

    // Handlebars
    app.engine('handlebars', engine({
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        },
        helpers: {
            formatTelefone: function(telefone) {
                if (!telefone) return telefone;
    
                telefone = telefone.toString();
    
                if (telefone.length === 10) {
                    return `(${telefone.substring(0, 2)}) ${telefone.substring(2, 6)}-${telefone.substring(6)}`;
                } else if (telefone.length === 11) {
                    return `(${telefone.substring(0, 2)}) ${telefone.substring(2, 7)}-${telefone.substring(7)}`;
                } else {
                    return telefone;
                }
            },
            formatCpf: function formatarCPF(cpf) {
                cpf = cpf.replace(/\D/g, '');
                if (cpf.length === 11) {
                    return cpf.replace(/(\d{3})(\d)/, '$1.$2')
                               .replace(/(\d{3})(\d)/, '$1.$2')
                               .replace(/(\d{3})(\d{2})$/, '$1-$2');
                }
                return cpf;
            },
            formatCNPJ: function(cnpj) {
                if (!cnpj) return '';
                cnpj = cnpj.replace(/\D/g, '');
                return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
            }
        }
    }));
    app.set('view engine', 'handlebars');
    app.set('views', path.join(__dirname, 'views'));

   
    async function initializeDatabase() {
        try {
            await initialize();  
            await sequelize.sync();  
            console.log('Banco de dados MySQL conectado e tabelas sincronizadas com sucesso.');
        } catch (error) {
            console.error('Erro ao inicializar o banco de dados:', error);
            process.exit(1);
        }
    }

  
app.use(express.static('public'));


app.use('/', index);
//app.use('/candidato', candidato);
//app.use('/empresa', empresa);


const PORT = 8081;
app.listen(PORT, async () => {
    await initializeDatabase();
    console.log("Servidor rodando na porta 8081!");
});
