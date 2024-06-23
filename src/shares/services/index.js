const { url, axios, variable } = require('../../config');

exports.getSharesData = async () => {
    try {
        const response = await axios.post(url.shares, {
            instrumentStatus : variable.INSTRUMENT_STATUS_UNSPECIFIED
        });
        return response.data;
    } catch (error) {
        console.log(error)
        throw new Error('Error fetching data from external API');
    }
};
