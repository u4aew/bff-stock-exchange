const footerService = require('../services');

exports.getExample = async (req, res) => {
    try {
        const data = await footerService.getData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data' });
    }
};
