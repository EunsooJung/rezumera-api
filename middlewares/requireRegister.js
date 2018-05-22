/*
 *
 */
module.exports = (req, res, next) => {
    if (req.user.register < 1) {
        return res.status(401).send({ error: 'It needs login!' });
    }

    next();
};