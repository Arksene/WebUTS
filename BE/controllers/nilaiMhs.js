import nilaiMhs from "../models/nilaiModels.js";

export const getnilaiMhs = async (req, res) => {
  try {
    const response = await nilaiMhs.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createDataMhs = async (req, res) => {
  const existingMhs = await nilaiMhs.findOne({ where: { NPM: req.body.NPM } });
  if (existingMhs) {
    return res.status(400).json({ msg: "NPM sudah terdaftar" });
  }

  try {
    await nilaiMhs.create(req.body);
    res.status(201).json({ msg: "Data Mahasiswa ditambahkan" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatenilaiMhs = async (req, res) => {
  try {
    await nilaiMhs.update(req.body, {
      where: {
        NPM: req.params.NPM,
      },
    });
    res.status(200).json({ msg: "Data Berhasil Di Update" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletenilaiMhs = async (req, res) => {
  try {
    await nilaiMhs.destroy({
      where: {
        NPM: req.params.NPM,
      },
    });
    res.status(200).json({ msg: "Data Berhasil Di Hapus" });
  } catch (error) {
    console.log(error.message);
  }
};
