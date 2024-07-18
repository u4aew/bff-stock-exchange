const shares = require('../../db/shares.json');

exports.getSharesData = async (start, end) => {
    try {
        const startIndex = start;
        const endIndex = end;
        const paginatedShares = shares.slice(startIndex, endIndex);

        return {
            total: shares.length,
            start,
            end,
            data: paginatedShares
        };
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching data from external API');
    }
};
