const Videos = require("./Videomodels");

const GetVideos = async (req, res) => 
{
    try 
    {
        if (Object.keys(req.query).length > 0) 
        {
            const {autor} = req.query;
            if (autor) 
            {
                const video = await Videos.find({ autor, activo: true });
                return res.status(200).json(video);
            }
        }

        const video = await Videos.find({ activo: true });
        return res.json(video);
    } catch (err) 
    {
        return res.status(500).send("Server error timeout ");
    }
}

const GetVideos2 = async (req, res) => 
{
    try {
        const { id } = req.params;

        const video = await Videos.findById(id);
        return res.status(200).json(video);
    } catch (err) 
    {
        return res.status(500).send("Ocurrio un error en el servidor");
    }
}

const PostVideos = async (req, res) => 
{
    try 
    {
        const { video, titulo, descripcion, duracion, autor, enlace, fechayhora } = req.body;
        const newVideo = new Videos({ video, titulo, descripcion, duracion, autor, enlace, fechayhora });
        await newVideo.save();

        res.status(201).json(newVideo);
    } catch (err) 
    {
        return res.status(500).send("Ocurrio un error en el servidor");
    }
}


const DeleteVideos = async (req, res) => 
{
    try 
    {
        const { id } = req.params;

        const video = await Videos.findByIdAndUpdate(id, { activo: false }, { new: true });
        return res.status(200).json(video);
    } catch (err) 
    {
        return res.status(500).send("Ocurrio un error en el servidor");
    }
}

module.exports = 
{
    GetVideos, GetVideos2, PostVideos, DeleteVideos
}