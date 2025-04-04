const {TickerModel, DoraModel,HomePdfModel, DoraTeamModel, TestimonialModel, EventsModel, DonarsModel, PdfModel } = require('../model/uploads-model');

// Handle file upload
const uploadDonars = async (req, res) => {
  try {
    const { path: filePath, filename } = req.file;
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name of the person is required.' });
    }

    const photo = await DonarsModel({ path: filePath, filename, name });
    await photo.save();

    res.status(201).json({ message: 'Photo uploaded successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to upload image.' });
  }
};

const uploadPdf = async (req, res) => {
  try {
    const { path: filePath, filename } = req.file;
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name of the pdf is required.' });
    }

    const pdf = await PdfModel({ path: filePath, filename, name });
    await pdf.save();

    res.status(201).json({ message: 'pdf uploaded successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to upload pdf.' });
  }
};

const HomePdfUpload = async (req, res) => {
  try {
    const { path: filePath, filename } = req.file;
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name of the pdf is required.' });
    }

    const pdf = await HomePdfModel({ path: filePath, filename, name });
    await pdf.save();

    res.status(201).json({ message: 'pdf uploaded successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to upload pdf.' });
  }
};

const Testimonialuploads = async (req, res) => {
  try {
    const { path: filePath, filename } = req.file;
    const { name, position, department, comment } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name of the person is required.' });
    }

    const photo = await TestimonialModel({ path: filePath, filename, name, position, department, comment });
    await photo.save();

    res.status(201).json({ message: 'Photo uploaded successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to upload image.' });
  }
};

const DoraTeamuploads = async (req, res) => {
  try {
    const { path: filePath, filename } = req.file;
    const { name, position, phone, Work } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name of the person is required.' });
    }

    const photos = await DoraTeamModel({ path: filePath, filename, name, position, phone, Work });
    await photos.save();

    res.status(201).json({ message: 'Photo uploaded successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to upload image.' });
  }
};

const Dorauploads = async (req, res) => {
  try {
    const { path: filePath, filename } = req.file;
    const { name, position, phone, email, email2, AboutDora, MessageFromDORA } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name of the person is required.' });
    }

    const photos = await DoraModel({ path: filePath, filename, name, position, phone, email, email2, AboutDora, MessageFromDORA });
    await photos.save();

    res.status(201).json({ message: 'Photo uploaded successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to upload image.' });
  }
};


const Eventsuploads = async (req, res) => {
  try {
    const { duration, heading, description } = req.body;

    const Events = await EventsModel({ duration, heading, description });
    await Events.save();

    res.status(201).json({ message: 'Events uploaded successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to upload Events.' });
  }
};

const Tickeruploads = async (req, res) => {
  try {
    const { heading, Link } = req.body;

    const Ticker = await TickerModel({ heading, Link });
    await Ticker.save();

    res.status(201).json({ message: 'Ticker uploaded successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to upload Ticker.' });
  }
};

const GetTicker = async (req, res) => {
  try {
    const Ticker = await TickerModel.find();

    if (!Ticker || Ticker.length === 0) {
      return res.status(404).json({ message: 'No Ticker found.' });
    }

    res.status(200).json({ Ticker });
  } catch (error) {
    console.error(`Error fetching Ticker: ${error}`);
    res.status(500).json({ message: 'Server error.' });
  }
};

const deleteTickerById = async (req, res) => {
  try {
    const id = req.params.id;
    await TickerModel.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfuly" });
  } catch (error) {
    next(error);
  }
}

const GetEvents = async (req, res) => {
  try {
    const Events = await EventsModel.find();

    if (!Events || Events.length === 0) {
      return res.status(404).json({ message: 'No Events found.' });
    }

    res.status(200).json({ Events });
  } catch (error) {
    console.error(`Error fetching Events: ${error}`);
    res.status(500).json({ message: 'Server error.' });
  }
};

// Retrieve all images
const getDonars = async (req, res) => {
  try {
    const photos = await DonarsModel.find();

    if (!photos || photos.length === 0) {
      return res.status(404).json({ message: 'No images found.' });
    }

    res.status(200).json({ photos });
  } catch (error) {
    console.error(`Error fetching images: ${error}`);
    res.status(500).json({ message: 'Server error.' });
  }
};

const GetTPDF = async (req, res) => {
  try {
    const photos = await PdfModel.find();

    if (!photos || photos.length === 0) {
      return res.status(404).json({ message: 'No Pdf found.' });
    }

    res.status(200).json({ photos });
  } catch (error) {
    console.error(`Error fetching images: ${error}`);
    res.status(500).json({ message: 'Server error.' });
  }
};

const GetHomePDF = async (req, res) => {
  try {
    const photos = await HomePdfModel.find();

    if (!photos || photos.length === 0) {
      return res.status(404).json({ message: 'No Pdf found.' });
    }

    res.status(200).json({ photos });
  } catch (error) {
    console.error(`Error fetching images: ${error}`);
    res.status(500).json({ message: 'Server error.' });
  }
};


const GetTestimonial = async (req, res) => {
  try {
    const fetchTestimonial = await TestimonialModel.find();

    if (!fetchTestimonial || fetchTestimonial.length === 0) {
      return res.status(404).json({ message: 'No images found.' });
    }

    res.status(200).json({ fetchTestimonial });
  } catch (error) {
    console.error(`Error fetching images: ${error}`);
    res.status(500).json({ message: 'Server error.' });
  }
};

const GetDoraTeam = async (req, res) => {
  try {
    const fetchDoraTeam = await DoraTeamModel.find();

    if (!fetchDoraTeam || fetchDoraTeam.length === 0) {
      return res.status(404).json({ message: 'No images found.' });
    }

    res.status(200).json({ fetchDoraTeam });
  } catch (error) {
    console.error(`Error fetching images: ${error}`);
    res.status(500).json({ message: 'Server error.' });
  }
};

const GetDora = async (req, res) => {
  try {
    const fetchDora = await DoraModel.find();

    if (!fetchDora || fetchDora.length === 0) {
      return res.status(404).json({ message: 'No images found.' });
    }

    res.status(200).json({ fetchDora });
  } catch (error) {
    console.error(`Error fetching images: ${error}`);
    res.status(500).json({ message: 'Server error.' });
  }
};


const updatDoraTeamById = async (req, res) => {
  try {

    const id = req.params.id;
    const updateUserData = req.body;
    const updatedData = await DoraTeamModel.updateOne({ _id: id }, {
      $set: updateUserData,
    })
    return res.status(200).json(updatedData)

  } catch (error) {
    next(error)
  }
}


const deleteDoraTeamById = async (req, res) => {
  try {
    const id = req.params.id;
    await DoraTeamModel.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfuly" });
  } catch (error) {
    next(error);
  }
}

const updatDonarsById = async (req, res) => {
  try {

    const id = req.params.id;
    const updateUserData = req.body;
    const updatedData = await DonarsModel.updateOne({ _id: id }, {
      $set: updateUserData,
    })
    return res.status(200).json(updatedData)

  } catch (error) {
    next(error)
  }
}


const deleteDonarsById = async (req, res) => {
  try {
    const id = req.params.id;
    await DonarsModel.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfuly" });
  } catch (error) {
    next(error);
  }
}

const updatEventsById = async (req, res) => {
  try {

    const id = req.params.id;
    const updateUserData = req.body;
    const updatedData = await EventsModel.updateOne({ _id: id }, {
      $set: updateUserData,
    })
    return res.status(200).json(updatedData)

  } catch (error) {
    next(error)
  }
}


const deleteEventsById = async (req, res) => {
  try {
    const id = req.params.id;
    await EventsModel.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfuly" });
  } catch (error) {
    next(error);
  }
}

const updatDoraById = async (req, res) => {
  try {

    const id = req.params.id;
    const updateUserData = req.body;
    const updatedData = await DoraModel.updateOne({ _id: id }, {
      $set: updateUserData,
    })
    return res.status(200).json(updatedData)

  } catch (error) {
    next(error)
  }
}


const deleteDoraById = async (req, res) => {
  try {
    const id = req.params.id;
    await DoraModel.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfuly" });
  } catch (error) {
    next(error);
  }
}

const updatTestimonialById = async (req, res) => {
  try {

    const id = req.params.id;
    const updateUserData = req.body;
    const updatedData = await TestimonialModel.updateOne({ _id: id }, {
      $set: updateUserData,
    })
    return res.status(200).json(updatedData)

  } catch (error) {
    next(error)
  }
}


const deleteTestimonialById = async (req, res) => {
  try {
    const id = req.params.id;
    await TestimonialModel.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfuly" });
  } catch (error) {
    next(error);
  }
}

const updatPDFById = async (req, res) => {
  try {

    const id = req.params.id;
    const updateUserData = req.body;
    const updatedData = await PdfModel.updateOne({ _id: id }, {
      $set: updateUserData,
    })
    return res.status(200).json(updatedData)

  } catch (error) {
    next(error)
  }
}


const deletePDFById = async (req, res,next) => {
  try {
    const id = req.params.id;
    await PdfModel.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfuly" });
  } catch (error) {
    next(error);
  }
}

const deleteHomePdfById = async (req, res, next) => {
  try {
    const id = req.params.id;
    await HomePdfModel.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    next(error); // Pass the error to the next middleware (error handler)
  }
};


module.exports = {
  deleteHomePdfById,
  deletePDFById,
  updatDonarsById,
  deleteDonarsById,
  updatEventsById,
  deleteEventsById,
  updatDoraById,
  deleteDoraById,
  updatTestimonialById,
  deleteTestimonialById,
  updatDoraTeamById,
  deleteDoraTeamById,
  uploadPdf,
  uploadDonars,
  getDonars,
  Testimonialuploads,
  GetTestimonial,
  GetEvents,
  Eventsuploads,
  DoraTeamuploads,
  GetDoraTeam,
  Dorauploads,
  GetDora,
  updatPDFById,
  GetTPDF,
  GetHomePDF,
  HomePdfUpload,
  deleteTickerById,
  Tickeruploads,
  GetTicker
};