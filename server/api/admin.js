import Express from 'express'
const router = Express.Router();

router.get('/getUsers',(req,res)=>{
    res.send('获取全部的用户')
});

module.exports = router;