import { Request, Response, Router } from "express";

const router = Router();

router.get("/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    res.send({ data: 'El id es: ' + id });
})

export { router }