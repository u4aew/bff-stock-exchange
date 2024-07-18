const sharesService = require('../services');

exports.getExample = async (req, res) => {
    try {
        const start = parseInt(req.query.start) || 1;
        const end = parseInt(req.query.end) || 10;

        const data = await sharesService.getSharesData(start, end);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data' });
    }
};
