const { footerData } = require('./const');

exports.getData = async () => {
    try {
        return {data: footerData};
    } catch (error) {
        console.log(error)
        throw new Error('Error fetching data from external API');
    }
};
