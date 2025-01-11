const { carouselModel,TeamModel,HeadModel,GalleryModel } = require('../model/Iarc-model');


const carouselUploads = async (req, res) => {
    try {
        const { path: filePath, filename } = req.file;
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ error: 'Name of the carousel is required.' });
        }

        const photo = await carouselModel({ path: filePath, filename, name });
        await photo.save();

        res.status(201).json({ message: 'Photo uploaded successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Unable to upload image.' });
    }
};

const getCarousel = async (req, res) => {
    try {
      const photos = await carouselModel.find();
  
      if (!photos || photos.length === 0) {
        return res.status(404).json({ message: 'No images found.' });
      }
  
      res.status(200).json({ photos });
    } catch (error) {
      console.error(`Error fetching images: ${error}`);
      res.status(500).json({ message: 'Server error.' });
    }
  };

  const deleteCarouselById = async (req, res) => {
    try {
      const id = req.params.id;
      await carouselModel.deleteOne({ _id: id });
      return res.status(200).json({ message: "User Deleted Successfuly" });
    } catch (error) {
      next(error);
    }
  }

  const Headuploads = async (req, res) => {
    try {
      const { path: filePath, filename } = req.file;
      const { name, designation, phone, email,LinkedIn,Instagram } = req.body;
  
      if (!name) {
        return res.status(400).json({ error: 'Name of the person is required.' });
      }
  
      const photos = await HeadModel({ path: filePath, filename,  name, designation, phone, email,LinkedIn,Instagram });
      await photos.save();
  
      res.status(201).json({ message: 'Photo uploaded successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Unable to upload image.' });
    }
  };

  const getHead = async (req, res) => {
    try {
      const photos = await HeadModel.find();
  
      if (!photos || photos.length === 0) {
        return res.status(404).json({ message: 'No images found.' });
      }
  
      res.status(200).json({ photos });
    } catch (error) {
      console.error(`Error fetching images: ${error}`);
      res.status(500).json({ message: 'Server error.' });
    }
  };
const deleteHeadById = async (req, res) => {
  try {
    const id = req.params.id;
    await HeadModel.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfuly" });
  } catch (error) {
    next(error);
  }
}

const Teamuploads = async (req, res) => {
  try {
    const { path: filePath, filename } = req.file;
    const { name, designation, phone, email,LinkedIn,Instagram } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name of the person is required.' });
    }

    const photos = await TeamModel({ path: filePath, filename,  name, designation, phone, email,LinkedIn,Instagram });
    await photos.save();

    res.status(201).json({ message: 'Photo uploaded successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to upload image.' });
  }
};

const getTeam = async (req, res) => {
  try {
    const photos = await TeamModel.find();

    if (!photos || photos.length === 0) {
      return res.status(404).json({ message: 'No images found.' });
    }

    res.status(200).json({ photos });
  } catch (error) {
    console.error(`Error fetching images: ${error}`);
    res.status(500).json({ message: 'Server error.' });
  }
};
const deleteTeamById = async (req, res) => {
try {
  const id = req.params.id;
  await TeamModel.deleteOne({ _id: id });
  return res.status(200).json({ message: "User Deleted Successfuly" });
} catch (error) {
  next(error);
}
}

const GalleryUploads = async (req, res) => {
  try {
    const { path: filePath, filename } = req.file;
    const { Numberimg } = req.body;

    // Validate that Numberimg is a valid number
    if (!Numberimg || isNaN(Number(Numberimg))) {
      return res.status(400).json({ error: 'A valid number for the carousel is required.' });
    }

    const photo = new GalleryModel({ path: filePath, filename, Numberimg: Number(Numberimg) });
    await photo.save();

    res.status(201).json({ message: 'Photo uploaded successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to upload image.' });
  }
};


const getGallery = async (req, res) => {
  try {
    const photos = await GalleryModel.find();

    if (!photos || photos.length === 0) {
      return res.status(404).json({ message: 'No images found.' });
    }

    res.status(200).json({ photos });
  } catch (error) {
    console.error(`Error fetching images: ${error}`);
    res.status(500).json({ message: 'Server error.' });
  }
};

const deleteGalleryById = async (req, res) => {
  try {
    const id = req.params.id;
    await GalleryModel.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfuly" });
  } catch (error) {
    next(error);
  }
}

module.exports = {GalleryUploads,getGallery,deleteGalleryById,carouselUploads,getCarousel,deleteCarouselById,Teamuploads,getTeam,deleteTeamById,Headuploads,getHead,deleteHeadById}