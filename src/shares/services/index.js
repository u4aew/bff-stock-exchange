const shares = require('../../db/shares.json');

exports.getSharesData = async (page, limit) => {
    try {
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const paginatedShares = shares.slice(startIndex, endIndex);

        return {
            total: shares.length,
            page,
            limit,
            data: paginatedShares
        };
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching data from external API');
    }
};
