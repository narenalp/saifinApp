import { Sequelize } from "sequelize";
 
const db = new Sequelize('saiserv', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;