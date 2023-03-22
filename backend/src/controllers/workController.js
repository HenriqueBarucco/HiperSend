import work from "../models/Work.js";

class WorkController {
  static listarTrabalho = (req, res) => {
    work.find((err, works) => {
      res.status(200).json(works);
    });
  };

  static atualizarTrabalho = (req, res) => {
    const day = req.params.day;

    work.exists({ day }, (works) => {
      if (works == null) {
        var newWork = new work({
          day: day,
          start: req.body.start,
          end: req.body.end,
        });
        return newWork.save((err) => {
          if (!err) {
            console.log("Dia de trabalho criado.");
          } else {
            console.log("Erro ao criar novo dia de trabalho.");
          }
        });
      }
    });

    work.findOneAndUpdate(
      { day: `${day}` },
      { start: `${req.body.start}`, end: `${req.body.end}` },
      (err, works) => {
        if (!err) {
          res.status(200).send({
            message: "Trabalho atualizado com sucesso",
          });
        } else {
          res.status(500).send({ message: err.message });
        }
      }
    );
  };
}

export default WorkController;
