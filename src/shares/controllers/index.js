const sharesService = require('../services');

exports.getExample = async (req, res) => {
    try {
        const data = await sharesService.getSharesData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data' });
    }
};
