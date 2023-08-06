import { Request, Response, Router } from "express";
const router = Router();
/**
 * localhost:3000/api/item (GET)
 */

// router.get("/item", (req: Request, res: Response) => {
//Para ocupar importación de rutas dinámicas quitamos la ruta para que quede al nombre del archivo
router.get("/", (req: Request, res: Response) => {
    console.log("🚀 ~ file: item.ts:10 ~ router.get ~ req.query:", req.query)
    res.send({ data: 'el item es correcto' });
});

export { router }


// localhost:3000/api/item/test (GET)
// router.get("/test", (req, res) => {
//     res.send("Item test route");
// }) 
// export default router;

