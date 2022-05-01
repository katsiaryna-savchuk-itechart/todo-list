const db = require("../models");
const List = db.list;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.action) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const item = {
    action: req.body.action,
    date: req.body.date,
  };

  List.create(item)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the List Item.",
      });
    });
};

exports.findAll = (req, res) => {
  List.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving the full List of Items.",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  List.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        return res.send({
          message: "List Item was deleted successfully!",
        });
      }
      return res.send({
        message: `Cannot delete List Item with id=${id}. Maybe Item was not found!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete List Item with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  List.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} List Items were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all list items.",
      });
    });
};
