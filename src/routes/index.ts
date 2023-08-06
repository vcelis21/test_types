import { Router } from "express";
import { readdirSync } from "fs";
const PATH_ROUTER = `${__dirname}/`;
const router = Router();

const cleanFileName = (fileName: string) => {
    const file = fileName.split(".").shift();
    return file
    // return fileName.split(".")[0];
}

readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if (fileName !== "index.ts") {
        import(`./${cleanName}`).then((moduleRouter) => {
            router.use(`/${cleanName}`, moduleRouter.router);
        })
        console.log(`Cargando ruta: ${cleanName} ...`);
        // const file = cleanFileName(fileName);
        // router.use(`/${file}`, require(`./${file}`));
    }
});

export { router }