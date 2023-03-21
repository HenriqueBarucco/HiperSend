import work from "../models/Work.js";

class WorkController {
    static listarTrabalho = (req, res) => {
        work.find((err, works) => {
            res.status(200).json(works);
        });
    };

    static atualizarTrabalho = (req, res) => {
        const id = req.params.id;

        work.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({
                    message: "Trabalho atualizado com sucesso",
                });
            } else {
                res.status(500).send({ message: err.message });
            }
        });
    };
}

export default WorkController;