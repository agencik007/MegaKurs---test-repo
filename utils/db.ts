import {createPool} from "mysql2/promise";

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'megakurs_santa_gifts',
    namedPlaceholders: true,
    decimalNumbers: true,
});