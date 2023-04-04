import express from 'express';
var router = express.Router();
import User from '../db/schemas/User.js';


router.post('/', async (req, res) => {
    try {
        const returningUser = await User.exists({ user_id: req.body.user.id });
        if (returningUser) {
            const user = await User.updateOne({user_id: req.body.user.id},{$push: {favorites: req.body.selection}});
        } else {
            const newUser = new User({user_id: req.body.user.id, name: req.body.user.name, favorites: [req.body.selection]});
            newUser.save()
        }
    } catch (error) {
        console.error(error);
    }
})

router.delete('/', async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({user_id: req.body.userId},{$pull: {favorites: {imdbID: req.body.selectionId}}});
    } catch (error) {
        console.error(error);
    }
})


export default router;