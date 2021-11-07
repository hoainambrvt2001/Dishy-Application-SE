"use strict";

class Food {
  constructor(id, type, description, price, unitPrice, src) {
    this.id = id;
    this.type = type;
    this.description = description;
    this.price = price;
    this.unitPrice = unitPrice;
    this.src = src;
  }
}

class FoodCategory {
  constructor(id, name, image) {
    this.id = id;
    this.name = name;
    this.image = image;
  }
}

const foodItems = [
  [
    new Food(
      "1",
      "Gà Rán - Quay",
      "Gà Rán (1 Miếng)",
      "35.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/7166d1bee7b66d1e90e7899cda0b03be.jpg"
    ),
    new Food(
      "2",
      "Gà Rán - Quay",
      "Gà Rán (2 Miếng)",
      "66.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/1eb5c19fa53a45152989923c626feebe.jpg"
    ),
    new Food(
      "3",
      "Gà Rán - Quay",
      "Gà Rán (3 Miếng)",
      "96.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/6d19408b40d53bba4601aadd883b97ec.jpg"
    ),
    new Food(
      "4",
      "Gà Rán - Quay",
      "Gà Rán (6 Miếng)",
      "190.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/68c63acecebbd5752530e3064e5d6cfb.jpg"
    ),
    new Food(
      "5",
      "Gà Rán - Quay",
      "Gà Rán (9 Miếng)",
      "281.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/a6525886894c89c32ca47d57a9170f93.jpg"
    ),
    new Food(
      "6",
      "Gà Rán - Quay",
      "Gà Rán (12 Miếng)",
      "369.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/2798a3a4e0d3f66c2a45b51f09f043e8.jpg"
    ),
    new Food(
      "7",
      "Gà Rán - Quay",
      "Gà Quay",
      "66.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/3708a6181f25a1a4e25ed6fe86e2f649.jpg"
    ),
    new Food(
      "8",
      "Gà Rán - Quay",
      "Phần Hot Wings 3 Miếng",
      "48.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/b847fbacc79fb14179b5c1e1604fef53.jpg"
    ),
    new Food(
      "9",
      "Gà Rán - Quay",
      "Phần Hot Wings 5 Miếng",
      "69.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/b25e3cd3548d8669e2cbc28bcaff8993.jpg"
    ),
    new Food(
      "10",
      "Cơm - Burger",
      "Cơm Gà Truyền Thống (1 Phần)",
      "40.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/9886fd4a2c72a01d10b5f4713d00fe73.jpg"
    ),
    new Food(
      "11",
      "Cơm - Burger",
      "Cơm Gà Giòn Cay (1 Phần)",
      "40.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/130dba524bed0e612d77979bfd579ed4.jpg"
    ),
    new Food(
      "12",
      "Cơm - Burger",
      "Cơm Gà Giòn Không Cay (1 Phần)",
      "40.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/0f0b7d8bef924fd0d531bfac6b244cf3.jpg"
    ),
    new Food(
      "13",
      "Cơm - Burger",
      "Burger Gà Quay Flava (1 Phần)",
      "46.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/9886fd4a2c72a01d10b5f4713d00fe73.jpg"
    ),
    new Food(
      "14",
      "Cơm - Burger",
      "Burger Tôm",
      "41.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/c21e391e9447babbc5ec76a902b68d88.jpg"
    ),
    new Food(
      "15",
      "Cơm - Burger",
      "Burger Zinger (1 Phần)",
      "50.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/9cff128ec12ceed884d13a48b2aecc79.jpg"
    ),
    new Food(
      "16",
      "Cơm - Burger",
      "Cơm Phi Lê Gà Quay Tiêu (1 Phần)",
      "40.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/3ddaeb667c13c83a5bcb3d03d6bad726.jpg"
    ),
    new Food(
      "17",
      "Cơm - Burger",
      "Cơm Phi Lê Gà Quay Flava (1 Phần)",
      "40.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/5c51e7c7d3df87b54d54d7080992b80f.jpg"
    ),
    new Food(
      "18",
      "Cơm - Burger",
      "Cơm Phi Lê Gà Giòn (1 Phần)",
      "40.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/876327fff18e80fc6b1ddd0826ba65bf.jpg"
    ),
    new Food(
      "19",
      "Cơm - Burger",
      "Cơm Gà Xiên Que (1 Phần)",
      "40.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/b25e3cd3548d8669e2cbc28bcaff8993.jpg"
    ),
    new Food(
      "20",
      "Thức Ăn Nhẹ",
      "Phô mai viên (4 viên)",
      "28.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/e3f046e3043dae1b45ce325f4ba68cec.jpg"
    ),
    new Food(
      "21",
      "Thức Ăn Nhẹ",
      "Phô mai viên (6 viên)",
      "38.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/8d6a82cd5cad07813d853985275fbede.jpg"
    ),
    new Food(
      "22",
      "Thức Ăn Nhẹ",
      "Khoai Tây Viên Nhân Gravy (3 viên)",
      "18.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/7e3a9a03ff13da14ba9ee73bc0a4511f.jpg"
    ),
    new Food(
      "23",
      "Thức Ăn Nhẹ",
      "Khoai Tây Viên Nhân Gravy (5 viên)",
      "28.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/71f34bde66f239d1af6ffadd137c59e6.jpg"
    ),
    new Food(
      "24",
      "Thức Ăn Nhẹ",
      "Popcorn (Vừa)",
      "36.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/cd5012f29bd76d8805ddfb640c21c23c.jpg"
    ),
    new Food(
      "25",
      "Thức Ăn Nhẹ",
      "Popcorn (Lớn)",
      "55.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/8736783e7ab937ee6b59ab7346e200ca.jpg"
    ),
    new Food(
      "26",
      "Thức Ăn Nhẹ",
      "Cá Thanh (3 Thanh)",
      "40.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/63cb9709f28aaba108da830645919952.jpg"
    ),
    new Food(
      "27",
      "Thức Ăn Nhẹ",
      "Gà Xiên Que (2 Thanh)",
      "30.000đ",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/4b5e669a366b2048e36dd5b1cc0d652d.jpg"
    ),
    new Food(
      "28",
      "Thức Ăn Nhẹ",
      "Khoai Tây Chiên (Vừa)",
      "14.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/a820f32c8875fe1c784f3d352fead5fa.jpg"
    ),
    new Food(
      "29",
      "Thức Ăn Nhẹ",
      "Khoai Tây Chiên (Lớn)",
      "26.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/ceaee98fe27abcf5c1230f0fdc2d29af.jpg"
    ),
    new Food(
      "30",
      "Thức Ăn Nhẹ",
      "Khoai Tây Chiên (Đại)",
      "36.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/b4431f0780fa184caf27f7902a890bad.jpg"
    ),
    new Food(
      "31",
      "Thức Ăn Nhẹ",
      "Bắp cải trộn (Vừa)",
      "12.000đ",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/81ecda181b4ef5da7f9ac148f285e759.jpg"
    ),
    new Food(
      "32",
      "Thức Ăn Nhẹ",
      "Bắp cải trộn (Lớn)",
      "21.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/ef4d1427f0b85019c847b3853cbe6295.jpg"
    ),
    new Food(
      "33",
      "Thức Ăn Nhẹ",
      "Bắp Cải Trộn (Đại)",
      "31.000đ",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/3d08287366dad49a0e2ac0d90f9d7ff3.jpg"
    ),
    new Food(
      "34",
      "Thức Ăn Nhẹ",
      "Khoai tây nghiền (Vừa)",
      "12.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/da78b7e7961db72ce9f6b892acce589a.jpg"
    ),
    new Food(
      "35",
      "Thức Ăn Nhẹ",
      "Khoai tây nghiền  (Lớn)",
      "21.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/6b63f8851c3fb35a9ba4348a6f88a2e1.jpg"
    ),
    new Food(
      "36",
      "Thức Ăn Nhẹ",
      "Khoai tây nghiền (Đại)",
      "31.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/15ad4925cbe7d17cc866c806078e15ba.jpg"
    ),
    new Food(
      "37",
      "Thức Ăn Nhẹ",
      "Cơm Trắng",
      "10.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/be88d03a8d38c4d420e08877256ee0be.jpg"
    ),
    new Food(
      "38",
      "Thức Ăn Nhẹ",
      "Súp rong biển (1 phần)",
      "14.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/6f0c074738973430bbf70a4f84ed09f7.jpg"
    ),
    new Food(
      "39",
      "Tráng Miệng - Thức Uống",
      "Mocktail Ổi Hạt Chia",
      "29.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/840a2e7324a952f33b7abf9f5e3d5473.png"
    ),
    new Food(
      "40",
      "Tráng Miệng - Thức Uống",
      "Bánh Trứng (1 cái)",
      "17.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/83d3d0737b42e9066328c815692a2ea8.jpg"
    ),
    new Food(
      "41",
      "Tráng Miệng - Thức Uống",
      "Bánh Trứng (4 Cái)",
      "49.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/be95ff8508fa5aacb78baba4a6b644c1.jpg"
    ),
    new Food(
      "42",
      "Tráng Miệng - Thức Uống",
      "Pepsi Vị Chanh Không Calo Lon",
      "17.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/8f9a4cb3b943dd9d363fe889f1a977f2.png"
    ),
    new Food(
      "43",
      "Tráng Miệng - Thức Uống",
      "Pepsi Lon",
      "17.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/d9e2a3a3bd13fcf569f714339220ea7b.png"
    ),
    new Food(
      "44",
      "Tráng Miệng - Thức Uống",
      "7Up Lon",
      "17.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/31e08694578dae58aa5d0bbfc4d66b38.png"
    ),
    new Food(
      "45",
      "Tráng Miệng - Thức Uống",
      "Hộp Milo",
      "19.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/ec86fc55906339789edbd992856951f8.jpg"
    ),
    new Food(
      "46",
      "Tráng Miệng - Thức Uống",
      "Aquafina",
      "15.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/4dd31878f442ea6c57c9e6264efa84b2.jpg"
    ),
    new Food(
      "47",
      "Tráng Miệng - Thức Uống",
      "Trà đào",
      "23.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/f7afb1144d4f249aaf3129f8a2b4f697.jpg"
    ),
    new Food(
      "48",
      "Tráng Miệng - Thức Uống",
      "Mirinda Cam Lon",
      "17.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/8cf236e51b8575ed546a47ddda9e4b08.png"
    ),
  ],
  [
    new Food(
      "1",
      "Gà Rán - Quay",
      "Gà Rán (1 Miếng)",
      "35.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/7166d1bee7b66d1e90e7899cda0b03be.jpg"
    ),
    new Food(
      "2",
      "Gà Rán - Quay",
      "Gà Rán (2 Miếng)",
      "66.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/1eb5c19fa53a45152989923c626feebe.jpg"
    ),
    new Food(
      "3",
      "Gà Rán - Quay",
      "Gà Rán (3 Miếng)",
      "96.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/6d19408b40d53bba4601aadd883b97ec.jpg"
    ),
    new Food(
      "4",
      "Gà Rán - Quay",
      "Gà Rán (6 Miếng)",
      "190.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/68c63acecebbd5752530e3064e5d6cfb.jpg"
    ),
    new Food(
      "5",
      "Gà Rán - Quay",
      "Gà Rán (9 Miếng)",
      "281.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/a6525886894c89c32ca47d57a9170f93.jpg"
    ),
    new Food(
      "6",
      "Gà Rán - Quay",
      "Gà Rán (12 Miếng)",
      "369.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/2798a3a4e0d3f66c2a45b51f09f043e8.jpg"
    ),
    new Food(
      "7",
      "Gà Rán - Quay",
      "Gà Quay",
      "66.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/3708a6181f25a1a4e25ed6fe86e2f649.jpg"
    ),
    new Food(
      "8",
      "Gà Rán - Quay",
      "Phần Hot Wings 3 Miếng",
      "48.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/b847fbacc79fb14179b5c1e1604fef53.jpg"
    ),
    new Food(
      "9",
      "Gà Rán - Quay",
      "Phần Hot Wings 5 Miếng",
      "69.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/b25e3cd3548d8669e2cbc28bcaff8993.jpg"
    ),
  ],
  [
    new Food(
      "1",
      "Cơm - Burger",
      "Cơm Gà Truyền Thống (1 Phần)",
      "40.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/9886fd4a2c72a01d10b5f4713d00fe73.jpg"
    ),
    new Food(
      "2",
      "Cơm - Burger",
      "Cơm Gà Giòn Cay (1 Phần)",
      40.0,
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/130dba524bed0e612d77979bfd579ed4.jpg"
    ),
    new Food(
      "3",
      "Cơm - Burger",
      "Cơm Gà Giòn Không Cay (1 Phần)",
      "40.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/0f0b7d8bef924fd0d531bfac6b244cf3.jpg"
    ),
    new Food(
      "4",
      "Cơm - Burger",
      "Burger Gà Quay Flava (1 Phần)",
      "46.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/9886fd4a2c72a01d10b5f4713d00fe73.jpg"
    ),
    new Food(
      "5",
      "Cơm - Burger",
      "Burger Tôm",
      "41.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/c21e391e9447babbc5ec76a902b68d88.jpg"
    ),
    new Food(
      "6",
      "Cơm - Burger",
      "Burger Zinger (1 Phần)",
      "50.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/9cff128ec12ceed884d13a48b2aecc79.jpg"
    ),
    new Food(
      "7",
      "Cơm - Burger",
      "Cơm Phi Lê Gà Quay Tiêu (1 Phần)",
      "40.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/3ddaeb667c13c83a5bcb3d03d6bad726.jpg"
    ),
    new Food(
      "8",
      "Cơm - Burger",
      "Cơm Phi Lê Gà Quay Flava (1 Phần)",
      "40.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/5c51e7c7d3df87b54d54d7080992b80f.jpg"
    ),
    new Food(
      "9",
      "Cơm - Burger",
      "Cơm Phi Lê Gà Giòn (1 Phần)",
      "40.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/876327fff18e80fc6b1ddd0826ba65bf.jpg"
    ),
    new Food(
      "10",
      "Cơm - Burger",
      "Cơm Gà Xiên Que (1 Phần)",
      "40.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/combo/b25e3cd3548d8669e2cbc28bcaff8993.jpg"
    ),
  ],
  [
    new Food(
      "1",
      "Thức Ăn Nhẹ",
      "Phô mai viên (4 viên)",
      "28.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/e3f046e3043dae1b45ce325f4ba68cec.jpg"
    ),
    new Food(
      "2",
      "Thức Ăn Nhẹ",
      "Phô mai viên (6 viên)",
      "38.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/8d6a82cd5cad07813d853985275fbede.jpg"
    ),
    new Food(
      "3",
      "Thức Ăn Nhẹ",
      "Khoai Tây Viên Nhân Gravy (3 viên)",
      "18.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/7e3a9a03ff13da14ba9ee73bc0a4511f.jpg"
    ),
    new Food(
      "4",
      "Thức Ăn Nhẹ",
      "Khoai Tây Viên Nhân Gravy (5 viên)",
      "28.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/71f34bde66f239d1af6ffadd137c59e6.jpg"
    ),
    new Food(
      "5",
      "Thức Ăn Nhẹ",
      "Popcorn (Vừa)",
      "36.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/cd5012f29bd76d8805ddfb640c21c23c.jpg"
    ),
    new Food(
      "6",
      "Thức Ăn Nhẹ",
      "Popcorn (Lớn)",
      "55.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/8736783e7ab937ee6b59ab7346e200ca.jpg"
    ),
    new Food(
      "7",
      "Thức Ăn Nhẹ",
      "Cá Thanh (3 Thanh)",
      "40.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/63cb9709f28aaba108da830645919952.jpg"
    ),
    new Food(
      "8",
      "Thức Ăn Nhẹ",
      "Gà Xiên Que (2 Thanh)",
      "30.000đ",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/4b5e669a366b2048e36dd5b1cc0d652d.jpg"
    ),
    new Food(
      "9",
      "Thức Ăn Nhẹ",
      "Khoai Tây Chiên (Vừa)",
      "14.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/a820f32c8875fe1c784f3d352fead5fa.jpg"
    ),
    new Food(
      "10",
      "Thức Ăn Nhẹ",
      "Khoai Tây Chiên (Lớn)",
      "26.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/ceaee98fe27abcf5c1230f0fdc2d29af.jpg"
    ),
    new Food(
      "11",
      "Thức Ăn Nhẹ",
      "Khoai Tây Chiên (Đại)",
      "36.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/b4431f0780fa184caf27f7902a890bad.jpg"
    ),
    new Food(
      "12",
      "Thức Ăn Nhẹ",
      "Bắp cải trộn (Vừa)",
      "12.000đ",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/81ecda181b4ef5da7f9ac148f285e759.jpg"
    ),
    new Food(
      "13",
      "Thức Ăn Nhẹ",
      "Bắp cải trộn (Lớn)",
      "21.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/ef4d1427f0b85019c847b3853cbe6295.jpg"
    ),
    new Food(
      "14",
      "Thức Ăn Nhẹ",
      "Bắp Cải Trộn (Đại)",
      "31.000đ",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/3d08287366dad49a0e2ac0d90f9d7ff3.jpg"
    ),
    new Food(
      "15",
      "Thức Ăn Nhẹ",
      "Khoai tây nghiền (Vừa)",
      "12.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/da78b7e7961db72ce9f6b892acce589a.jpg"
    ),
    new Food(
      "16",
      "Thức Ăn Nhẹ",
      "Khoai tây nghiền  (Lớn)",
      "21.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/6b63f8851c3fb35a9ba4348a6f88a2e1.jpg"
    ),
    new Food(
      "17",
      "Thức Ăn Nhẹ",
      "Khoai tây nghiền (Đại)",
      "31.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/15ad4925cbe7d17cc866c806078e15ba.jpg"
    ),
    new Food(
      "18",
      "Thức Ăn Nhẹ",
      "Cơm Trắng",
      "10.000đ",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/be88d03a8d38c4d420e08877256ee0be.jpg"
    ),
    new Food(
      "19",
      "Thức Ăn Nhẹ",
      "Súp rong biển (1 phần)",
      "14.000đ",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/6f0c074738973430bbf70a4f84ed09f7.jpg"
    ),
  ],
  [
    new Food(
      "1",
      "Tráng Miệng - Thức Uống",
      "Mocktail Ổi Hạt Chia",
      "29.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/840a2e7324a952f33b7abf9f5e3d5473.png"
    ),
    new Food(
      "2",
      "Tráng Miệng - Thức Uống",
      "Bánh Trứng (1 cái)",
      "17.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/83d3d0737b42e9066328c815692a2ea8.jpg"
    ),
    new Food(
      "3",
      "Tráng Miệng - Thức Uống",
      "Bánh Trứng (4 Cái)",
      "49.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/be95ff8508fa5aacb78baba4a6b644c1.jpg"
    ),
    new Food(
      "4",
      "Tráng Miệng - Thức Uống",
      "Pepsi Vị Chanh Không Calo Lon",
      "17.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/8f9a4cb3b943dd9d363fe889f1a977f2.png"
    ),
    new Food(
      "5",
      "Tráng Miệng - Thức Uống",
      "Pepsi Lon",
      "17.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/d9e2a3a3bd13fcf569f714339220ea7b.png"
    ),
    new Food(
      "6",
      "Tráng Miệng - Thức Uống",
      "7Up Lon",
      "17.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/31e08694578dae58aa5d0bbfc4d66b38.png"
    ),
    new Food(
      "7",
      "Tráng Miệng - Thức Uống",
      "Hộp Milo",
      "19.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/ec86fc55906339789edbd992856951f8.jpg"
    ),
    new Food(
      "8",
      "Tráng Miệng - Thức Uống",
      "Aquafina",
      "15.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/4dd31878f442ea6c57c9e6264efa84b2.jpg"
    ),
    new Food(
      "9",
      "Tráng Miệng - Thức Uống",
      "Trà đào",
      "23.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/f7afb1144d4f249aaf3129f8a2b4f697.jpg"
    ),
    new Food(
      "10",
      "Tráng Miệng - Thức Uống",
      "Mirinda Cam Lon",
      "17.000",
      "VNĐ",
      "https://kfcvietnam.com.vn/uploads/product/8cf236e51b8575ed546a47ddda9e4b08.png"
    ),
  ],
];

const foodCategories = [
  new FoodCategory(
    "1",
    "Tất cả",
    "https://i.pinimg.com/originals/b9/77/ab/b977aba151234a50e2d702c16a196bf0.jpg"
  ),
  new FoodCategory(
    "2",
    "Gà Rán - Quay",
    "https://kfcvietnam.com.vn/uploads/combo/7166d1bee7b66d1e90e7899cda0b03be.jpg"
  ),
  new FoodCategory(
    "3",
    "Cơm - Burger",
    "https://kfcvietnam.com.vn/uploads/combo/9886fd4a2c72a01d10b5f4713d00fe73.jpg"
  ),
  new FoodCategory(
    "4",
    "Thức Ăn Nhẹ",
    "https://kfcvietnam.com.vn/uploads/product/e3f046e3043dae1b45ce325f4ba68cec.jpg"
  ),
  new FoodCategory(
    "5",
    "Tráng Miệng",
    "https://kfcvietnam.com.vn/uploads/product/840a2e7324a952f33b7abf9f5e3d5473.png"
  ),
];
