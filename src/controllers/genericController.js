exports.createUrl = (model) => async (req, res) => {
    try {
        const { parameter, parameter2 } = req.body;
        const url = await model.create({
            nameurl: parameter,
            namelink: parameter2
        });

        res.status(200).json({
            status: "success",
            url
        });

    } catch (error) {
        res.status(404).json({
            status: "Failed"
        });
    }
};

exports.showUrl = (model) => async (req, res) => {
    try {
        const urls = await model.findAll({
            where: {
                status: 'active'
            }
        });

        if (!urls) {
            return res.status(404).json({ status: "Failed", message: "No Urls found" });
        }

        res.status(200).json({ urls });

    } catch (error) {
        res.status(500).json({
            error: "An error occurred while fetching URLs."
        });
    }
};


exports.getFindOne = (model) => async (req, res) => {
    try {
        const { id } = req.params
        const searchShow = await model.findOne({
            where: {
                id,
                status: 'active'
            }
        })

        if (!model) {
            return res.status(404).json({
                status: "Failed"
            })
        }

        res.status(200).json({
            searchShow,
            status: "Success"
        })
    } catch (error) {
        return res.status(404).json({ error })
    }
}


exports.updateModel = (model) => async (req, res) => {
    try {
        const { nameurl, namelink } = req.body;
        const { id } = req.params;

        const updateModel = await model.findOne({
            where: {
                id,
                status: "active"
            }
        });
        !updateModel ? res.status(404).json({ status: "Failed" }) :
            await updateModel.update({ namelink, nameurl }); res.status(202).json({ updateModel })
    } catch (error) {
        return res.status(404).json({
            error
        });
    }
};

exports.deleteUrl = (model) => async (req, res) => {
    try {
        const { id } = req.params;

        const updateModel = await model.findOne({
            where: {
                id,
                status: "active"
            }
        });

        const sendResponse = (status, message) => {
            return res.status(status).json({ status, message });
        };

        return !updateModel
            ? sendResponse(404, "Failed")
            : (await updateModel.update({ status: "disabled" }) && sendResponse(202, "Delete", "Deleting correctly"));
    } catch (error) {
        return res.status(500).json({
            error: "An error occurred while deleting the model"
        });
    }
};
