const exampleService = require('../services/sharesService');

exports.getExample = async (req, res) => {
    try {
        const data = await exampleService.getSharesData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data' });
    }
};
