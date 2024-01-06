import dotenv from 'dotenv-safe';
import add from '@server/math/add';

dotenv.config();
console.log(add(1, 2));
