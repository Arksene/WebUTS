import nilaiMhs from "../models/nilaiModels.js";

export const getnilaiMhs = async (req, res) => {
  try {
    const response = await nilaiMhs.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const cekNPM = async (req, res) => {
  const npm = req.params.NPM; // Pastikan mengambil NPM dari URL params
  try {
    const existingMhs = await nilaiMhs.findOne({ where: { NPM: npm } }); // Konsisten dengan `NPM`
    if (existingMhs) {
      return res.status(200).json({ msg: "NPM sudah terdaftar" });
    }
    return res.status(404).json({ msg: "NPM belum terdaftar" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Terjadi kesalahan saat memeriksa NPM" });
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
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Data Berhasil Di Update" });
  } catch (error) {
    console.log(error.message);
  }
};
export const getnilaiMhsById = async (req, res) => {
  const { id } = req.params;
  try {
    const mahasiswa = await nilaiMhs.findOne({ where: { id } });
    if (!mahasiswa) {
      return res.status(404).json({ msg: "Data tidak ditemukan" });
    }
    res.status(200).json(mahasiswa);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Terjadi kesalahan saat mengambil data" });
  }
};

export const deletenilaiMhs = async (req, res) => {
  try {
    await nilaiMhs.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Data Berhasil Di Hapus" });
  } catch (error) {
    console.log(error.message);
  }
};
