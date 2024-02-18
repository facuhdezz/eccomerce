const productos = [
    {
        id: 1,
        category: "laptops",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/laptops%2Fasus-tuf-FX507ZI-15-6.jpg?alt=media&token=7ad7f1a4-cb80-4b0b-8b2a-70a09913fc2f",
        nombre: "Notebook ASUS TUF FX507ZI",
        precio: 2397,
        moneda: "USD",
        marca: "ASUS",
        caracteristicas: [
            "Pantalla: 15.6” FHD con retroiluminación LED 144 Hz (1920 x 1080 px)",
            "Procesador: Intel Core i7-12700H 12va Generación 2.3 GHz - 4.7 GHz (Turbo Boost)",
            "Memoria RAM: 16GB DDR4",
            "Almacenamiento: 1TB SSD",
            "Tarjeta Gráfica: NVIDIA GeForce RTX 4070 8GB DDR6",
            "SO: Windows 11 Home",
            "Batería: Ion de litio 4 celdas 90 Wh",
            "Dimensiones: 35.4 x 25.1 x 2.24 cm",
            "Peso: 2.2 kg",
            "Color: Mecha Grey",
            "Garantía: 1 año"
        ],
        stock: "5"
    },
    {
        id: 2,
        category: "laptops",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/laptops%2Flenovo-3-15-6.jpg?alt=media&token=75da752d-69a2-4232-81bb-2b4e203e5ae6",
        nombre: "Notebook LENOVO 3 15IT",
        precio: 697,
        moneda: "USD",
        marca: "LENOVO",
        caracteristicas: [
            "Pantalla: 15.6” FHD Táctil con retroiluminación LED (1920 x 1080 px)",
            "Procesador: Intel Core i5-1135G7 11va Generación 2.4 GHz - 4.2 GHz (Turbo Boost)",
            "Memoria RAM: 8GB DDR4",
            "Almacenamiento: 512GB SSD",
            "Tarjeta Gráfica: NVIDIA GeForce RTX 4070 8GB DDR6",
            "SO: Windows 11 Home",
            "Batería: Ion de litio 4 celdas 90 Wh",
            "Dimensiones: 35.4 x 25.1 x 2.24 cm",
            "Peso: 2.2 kg",
            "Color: Mecha Grey",
            "Garantía: 1 año"
        ],
        stock: "5"
    },
    {
        id: 3,
        category: "laptops",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/laptops%2Fkuu-xbook-14-1.jpg?alt=media&token=4fac8233-0e34-46c2-bc72-6ed2ebb9274f",
        nombre: "Notebook KUU XBook",
        precio: 367,
        moneda: "USD",
        marca: "KUU",
        caracteristicas: [
            "Pantalla: 14.1” FHD con retroiluminación LED (1920 x 1080 px)",
            "Procesador: Intel Celeron Quad Core J4105 1.5 GHz - 2.5 GHz (Turbo Boost)",
            "Memoria RAM: 8GB",
            "Almacenamiento: 256GB SSD",
            "Tarjeta Gráfica: Intel UHD Graphics",
            "Sistema Operativo: Windows 11 Pro",
            "Color: Plata",
            "Garantía: 1 año"
        ],
        stock: "5"
    },
    {
        id: 4,
        category: "laptops",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/laptops%2Fasus-vivobook-F1502-15-6.jpg?alt=media&token=265d1ca6-b8fc-46f8-80a9-2e0be0515089",
        nombre: "Notebook ASUS Vivobook F1502",
        precio: 1097,
        moneda: "USD",
        marca: "ASUS",
        caracteristicas: [
            "Pantalla: 15.6” FHD Táctil con retroiluminación LED (1920 x 1080 px)",
            "Procesador: Intel Core i7-1255U 12va Generación 3.5 GHz – 4.7 GHz (Turbo Boost)",
            "Memoria RAM: 16GB DDR4",
            "Almacenamiento: 512GB SSD",
            "Tarjeta Gráfica: Intel Iris Xe Graphics",
            "Sistema Operativo: Windows 11",
            "Batería: Ion de litio 3 Celdas 42Wh",
            "Dimensiones: 35.9 x 23.2 x 1.9 cm",
            "Peso: 1.7 kg",
            "Color: Quiet Blue",
            "Garantía: 1 año"
        ],
        stock: "5"
    },
    {
        id: 5,
        category: "laptops",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/laptops%2Fasus-vivobook-X1400-14-0.png?alt=media&token=23ec8b58-4431-42d5-8b9e-1d77787119d6",
        nombre: "Notebook ASUS Vivobook X1400",
        precio: 497,
        moneda: "USD",
        marca: "ASUS",
        caracteristicas: [
            "Pantalla: 14” HD con retroiluminación LED (1366 x 768px)",
            "Procesador: Intel Core i3-1115G4  2.4GHz – 4.2GHz (Turbo boost)",
            "Memoria RAM: 8GB DDR4",
            "Almacenamiento: 128 GB SSD M.2",
            "Tarjeta Gráfica: Intel UHD Graphics",
            "Sistema Operativo: Windows 11 Home",
            "Batería: 2 Celdas 37w",
            "Dimensiones: 32.54 x 21.60 x 1.99 cm",
            "Peso: 1.6 kg",
            "Color: Plata",
            "Garantía: 1 año"
        ],
        stock: "5"
    },
    {
        id: 6,
        category: "laptops",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/laptops%2Fhp-omen-16-1.jpg?alt=media&token=99bf7c0c-703b-491f-bef5-aff2d06d19b3",
        nombre: "Notebook HP OMEN",
        precio: 2297,
        moneda: "USD",
        marca: "HP",
        caracteristicas: [
            "Pantalla: IPS LED 16.1″ QHD 2560 x 1440 165Hz",
            "Procesador: Intel Core i9-12900H 3.8GHz – 5.0Ghz (Turbo Boost)",
            "Memoria RAM: 16GB DDR5 4800MHz",
            "Almacenamiento: 1TB SSD",
            "Tarjeta Gráfica: NVIDIA GeForce RTX 3060 con 6GB GDDR6",
            "Sistema Operativo: Windows 11 Home",
            "Batería: 4 celdas 70WHr litio ion",
            "Dimensiones: 36.9 x 24.8 x 2.3 cm",
            "Peso: 2.42 kg",
            "Color: Shadow Black",
            "Garantía: 1 año"
        ],
        stock: "5"
    },
    {
        id: 7,
        category: "laptops",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/laptops%2Fhp-victus-15-6.jpg?alt=media&token=5c39565f-4602-4dae-a8d2-347e398bf66a",
        nombre: "Notebook HP Victus Gaming",
        precio: 1597,
        moneda: "USD",
        marca: "HP",
        caracteristicas: [
            "Pantalla: 15.6” FHD con retroiluminación LED 144hZ (1920 x 1080 px)",
            "Procesador: AMD Ryzen 7-5800H 3.2 GHz – 4.4 GHz (Turbo Boost)",
            "Memoria RAM: 16GB DDR4",
            "Almacenamiento: 512GB SSD",
            "Tarjeta Gráfica: NVIDIA GeForce RTX 3050Ti 4096MB",
            "Sistema Operativo: Windows 11",
            "Batería: Polímero de litio",
            "Dimensiones: 35.7 x 25.5 x 2.3 cm",
            "Peso: 2.2 kg",
            "Color: Mica Silver",
            "Garantía: 1 año"
        ],
        stock: "5"
    },
    {
        id: 8,
        category: "laptops",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/laptops%2Fmsi-thin-15-6.jpg?alt=media&token=8b6773e5-cb85-4785-8037-f0b23a0753bc",
        nombre: "Notebook MSI THIN GF63",
        precio: 1509,
        moneda: "USD",
        marca: "MSI",
        caracteristicas: [
            "Pantalla: 15.6” FHD IPS (1920 x 1080 px)",
            "Procesador: Intel Core i5-12450H 12va Generación 3.3 GHz – 4.0GHz (Turbo Boost)",
            "Memoria RAM: 8GB",
            "Almacenamiento: 512GB SSD",
            "Tarjeta Gráfica: NVIDIA GeForce RTX 4050 GDDR6 6GB",
            "Sistema Operativo: Windows 11",
            "Batería: 3 Celdas 52.4 Whr",
            "Dimensiones: 35.9 x 25.4 x 2.1 cm",
            "Peso: 1.86 kg",
            "Color: Negro",
            "Garantía: 1 año"
        ],
        stock: "5"
    },
    {
        id: 9,
        category: "laptops",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/laptops%2Fmacbook-air-15-3.jpg?alt=media&token=75ff2bb9-17e1-4b31-84e5-4e2f787f9534",
        nombre: "APPLE MacBook Air MQKW3LL/A",
        precio: 2113,
        moneda: "USD",
        marca: "APPLE",
        caracteristicas: [
            "Pantalla: 15.3” LIQUID RETINA IPS LED, 2880 x 1864 píxeles",
            "Procesador: Chip M2 8 CORE",
            "Memoria RAM: 8GB",
            "Almacenamiento: 256GB SSD",
            "Sistema Operativo: MAC",
            "Batería: LI-PO 66.5 Wh",
            "Dimensiones: 34 x 23.8 x 1.2 cm",
            "Peso: 1.51 kg",
            "Color: Negro (midnight)",
            "Garantía: 1 año"
        ],
        stock: "5"
    },
    {
        id: 10,
        category: "laptops",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/laptops%2Fmacbook-pro-13-3.jpg?alt=media&token=c82c885b-bcfe-499d-8e8b-b866dbd65d20",
        nombre: "APPLE MacBook PRO MPXU2LL/A",
        precio: 899,
        moneda: "USD",
        marca: "MSI",
        caracteristicas: [
            "Pantalla: 13.3” RETINA IPS LED, 2560 x 1600 píxeles",
            "Procesador: Intel Core i5 7360U, 2,3 GHz – 3,6 GHz",
            "Memoria RAM: 8GB LPDDR3",
            "Almacenamiento: 256GB SSD",
            "Tarjeta Gráfica: Intel Iris Plus 640",
            "Sistema Operativo: MAC",
            "Batería: LI-PO 54.5 Wh",
            "Dimensiones: 30.4 x 21.2 x 1.5 cm",
            "Peso: 1.37 kg",
            "Color: Plateado",
            "Garantía: 1 año"
        ],
        stock: "5"
    },
    {
        id: 2001,
        category: "gabinetes",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/gabinetes%2FMX600RGB-01-w-550x550.jpg?alt=media&token=7cee10a4-43fe-4d98-bc61-356cd2528269",
        nombre: "Gabinete Cougar MX600 RGB",
        precio: 97,
        moneda: "USD",
        marca: "Cougar",
        caracteristicas: [
            "Capacidad máxima de 9 fans.",
            "Dimensiones: 23,5 x 51,5 x 47,8 (cm)",
            "Placas base: Mini ITX / Micro ATX / ATX / CEB / E-ATX"
        ],
        stock: "5"
    },
    {
        id: 2002,
        category: "gabinetes",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/gabinetes%2F05-3.png?alt=media&token=96572111-37ce-41c0-8958-6dc59d282490",
        nombre: "Gabinete Cougar DarkBlader-G",
        precio: 110,
        moneda: "USD",
        marca: "Cougar",
        caracteristicas: [
            "Capacidad máxima de 7 fans",
            "Dimensiones: 23,2 x 52,3 x 51,8 (cm)",
            "Placas base: Mini ITX / Micro ATX / ATX / CEB / **E-ATX"
        ],
        stock: "5"
    },
    {
        id: 2003,
        category: "gabinetes",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/gabinetes%2Fproducts_panzerevo_rgb-263x300.png?alt=media&token=d448e6ab-b347-45bc-add6-34c78f623e24",
        nombre: "Gabinete Cougar PANZER EVO RGB ",
        precio: 80,
        moneda: "USD",
        marca: "Cougar",
        caracteristicas: [
            "Capacidad máxima de 8 fans",
            "Dimensiones: 26,6 x 61,2 x 55,6 (cm)",
            "Placas base: Mini ITX / Micro ATX / ATX / CEB / E-ATX ( E-ATX up to 12x11″ )"
        ],
        stock: "5"
    },
    {
        id: 2004,
        category: "gabinetes",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/gabinetes%2FUNIFACE-RGB-01-2-550x550.jpg?alt=media&token=e5f272c6-1ea8-43d4-9f89-ab7213747bcb",
        nombre: "Gabinete Cougar Uniface RGB",
        precio: 75,
        moneda: "USD",
        marca: "Cougar",
        caracteristicas: [
            "Capacidad máxima de 9 fans",
            "Dimensiones: 23,0 x 49,3 x 47,5 (cm)",
            "Placas base: Mini ITX / Micro ATX / ATX / CEB / E-ATX"
        ],
        stock: "5"
    },
    {
        id: 2005,
        category: "gabinetes",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/gabinetes%2F02-3.png?alt=media&token=3aaa44bf-55e0-4894-ad33-42a754d97e8a",
        nombre: "Gabinete Cougar MX330-G Air",
        precio: 83,
        moneda: "USD",
        marca: "Cougar",
        caracteristicas: [
            "Capacidad máxima de 5 fans",
            "Dimensiones: 19,5 x 47,3 x 42,7 (cm)",
            "Placas base: Mini-ITX/Micro ATX/ATX"
        ],
        stock: "5"
    },
    {
        id: 2006,
        category: "gabinetes",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/gabinetes%2Fproducts_darkBlader_x7_green.png?alt=media&token=9cc9a499-9db4-46b6-b443-055e01f03318",
        nombre: "Gabinete Cougar DarkBlader-X7",
        precio: 85,
        moneda: "USD",
        marca: "Cougar",
        caracteristicas: [
            "Capacidad máxima de 7 fans",
            "Dimensiones: 22,0 x 48,6 x 46,8 (cm)",
            "Mini ITX / Micro ATX / ATX / CEB / E-ATX"
        ],
        stock: "5"
    },
    {
        id: 3001,
        category: "graficas",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/graficas%2Fgt1030.jpg?alt=media&token=cf89f8e0-0658-46b1-b52e-9b088234b740",
        nombre: "Nvidia GeForce GT 1030",
        precio: 110,
        moneda: "USD",
        marca: "Gigabyte",
        fabricante: "Nvidia",
        caracteristicas: [
            "Memoria: 2GB DDR4",
            "Frecuencia: 1417 MHz"
        ],
        stock: "8"
    },
    {
        id: 3002,
        category: "graficas",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/graficas%2Fgtx1050.jpg?alt=media&token=2b2deca1-f7fe-4e61-b41e-4b1a01d438b2",
        nombre: "Nvidia GeForce GTX 1050 Ti",
        precio: 280,
        moneda: "USD",
        marca: "Asus",
        fabricante: "Nvidia",
        caracteristicas: [
            "Memoria: 4GB DDR5",
            "Frecuencia: 1290 MHz"
        ],
        stock: "17"
    },
    {
        id: 3003,
        category: "graficas",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/graficas%2Fgtx1660.jpg?alt=media&token=04368d6d-b6e1-4c96-b186-77822a020054",
        nombre: "Nvidia GeForce GTX 1660 Super",
        precio: 367,
        moneda: "USD",
        marca: "Zotac",
        fabricante: "Nvidia",
        caracteristicas: [
            "Memoria: 6GB GDDR6",
            "Frecuencia: 1785 MHz"
        ],
        stock: "15"
    },
    {
        id: 3004,
        category: "graficas",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/graficas%2Frtx3060.jpg?alt=media&token=88d9f1c8-de6a-4caa-bdb6-95494d2f51a9",
        nombre: "Nvidia GeForce RTX 3060",
        precio: 420,
        moneda: "USD",
        marca: "Msi",
        fabricante: "Nvidia",
        caracteristicas: [
            "Memoria: 12GB GDDR6",
            "Frecuencia: 1710 MHz"
        ],
        stock: "12"
    },
    {
        id: 3005,
        category: "graficas",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/graficas%2Frtx4090.jpg?alt=media&token=e0949f69-de77-4ce2-b36e-509f202e9fed",
        nombre: "Nvidia GeForce RTX 4090",
        precio: 2600,
        moneda: "USD",
        marca: "Asus",
        fabricante: "Nvidia",
        caracteristicas: [
            "Memoria: 24GB GDDR6X",
            "Frecuencia: 2595 MHz"
        ],
        stock: "7"
    },
    {
        id: 3006,
        category: "graficas",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/graficas%2Frx580.jpg?alt=media&token=7f7bbab0-4f47-4e23-96be-413000b1334e",
        nombre: "AMD Radeon RX 580",
        precio: 150,
        moneda: "USD",
        marca: "XFX",
        fabricante: "AMD",
        caracteristicas: [
            "Memoria: 8GB GDDR5",
            "Frecuencia: 1386 MHz"
        ],
        stock: "4"
    },
    {
        id: 3007,
        category: "graficas",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/graficas%2Frx6600.jpg?alt=media&token=0a198691-cb46-4079-be9d-a7b35be59f7f",
        nombre: "AMD Radeon RX 6600 XT",
        precio: 250,
        moneda: "USD",
        marca: "Asrock",
        fabricante: "AMD",
        caracteristicas: [
            "Memoria: 8GB GDDR5",
            "Frecuencia: 1850 MHz"
        ],
        stock: "12"
    },
    {
        id: 3008,
        category: "graficas",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/graficas%2Frx7800.jpg?alt=media&token=e9084337-3573-4c64-ae23-97485e41c111",
        nombre: "MD Radeon RX 7800 XT",
        precio: 620,
        moneda: "USD",
        marca: "Sapphire",
        fabricante: "AMD",
        caracteristicas: [
            "Memoria: 16GB GDDR6",
            "Frecuencia: 2254 MHz"
        ],
        stock: "6"
    },
    {
        id: 3009,
        category: "graficas",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/graficas%2Frx6900.jpg?alt=media&token=a1eb42cd-ecbc-4608-87dd-f893922dd878",
        nombre: "AMD Radeon RX 6900 XT Master",
        precio: 1200,
        moneda: "USD",
        marca: "Gigabyte",
        fabricante: "AMD",
        caracteristicas: [
            "Memoria: 16GB GDDR6",
            "Frecuencia: 2448 MHz"
        ],
        stock: "3"
    },
    {
        id: 3010,
        category: "graficas",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/graficas%2Frtx5000.jpg?alt=media&token=bff9b4f8-5a41-429c-8c60-3448e9116009",
        nombre: "NVIDIA Quadro RTX 5000 ",
        precio: 950,
        moneda: "USD",
        marca: "Pny",
        fabricante: "Nvidia",
        caracteristicas: [
            "Memoria: 16GB GDDR6"
        ],
        stock: "1"
    },
    {
        id: 4001,
        category: "monitores",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/monitores%2Facer24p.jpg?alt=media&token=c94f06ca-04f0-4b5a-b174-0c35af83a583",
        nombre: "Monitor LCD Acer 24” VGA",
        precio: 82,
        moneda: "USD",
        marca: "Acer",
        caracteristicas: [
            "Tamaño: 24 pulgadas panorámica",
            "Resolución: nativa 1920 x 1080",
            "Tiempo de respuesta: 5ms"
        ],
        stock: "12"
    },
    {
        id: 4002,
        category: "monitores",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/monitores%2Fperseo23-8p.jpg?alt=media&token=9ee50e08-bb71-477c-bac8-05a6fcbb49fc",
        nombre: "Monitor Perseo 23.8” Fhd 165 Hz",
        precio: 186,
        moneda: "USD",
        marca: "Perseo",
        caracteristicas: [
            "Tamaño: 23.8 pulgadas de area visible",
            "Resolución: 1920 x 1080",
            "Tiempo de respuesta: 1ms"
        ],
        stock: "7"
    },
    {
        id: 4003,
        category: "monitores",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/monitores%2Fviewsonic27.jpg?alt=media&token=875da1b5-1d75-467a-b3b6-8e468351c235",
        nombre: "ViewSonic VA2747-MHJ - Monitor LED - 27” - 1920 x 1080 Full HD",
        precio: 240,
        moneda: "USD",
        marca: "ViewSonic",
        caracteristicas: [
            "Tamaño: 27 pulgadas",
            "Resolución: 1920 x 1080 Full HD",
            "Tiempo de respuesta: 5ms"
        ],
        stock: "5"
    },
    {
        id: 4004,
        category: "monitores",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/monitores%2Flenovo23-8.jpeg?alt=media&token=f2a387bf-1ea3-414b-b406-8556ec562d0c",
        nombre: "MONITOR LENOVO THINKVISION P24Q-30 23.8” QHD",
        precio: 360,
        moneda: "USD",
        marca: "Lenovo",
        caracteristicas: [
            "Tamaño: 23.8 pulgadas de area visible",
            "Resolución: 2560 x 1440",
            "Tiempo de respuesta: 4ms"
        ],
        stock: "6"
    },
    {
        id: 4005,
        category: "monitores",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/monitores%2Fsamsung27.jpg?alt=media&token=a3c3ff12-9740-4ab2-87c1-36dc62f92bc8",
        nombre: "Monitor Samsung G4 27” Full HD 240 Hz",
        precio: 476,
        moneda: "USD",
        marca: "Samsung",
        caracteristicas: [
            "Tamaño: 27 pulgadas",
            "Resolución: 1920 x 1080",
            "Tiempo de respuesta: 1ms"
        ],
        stock: "4"
    },
    {
        id: 4006,
        category: "monitores",
        img: "https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/monitores%2Fmsi34.jpg?alt=media&token=8ccfb179-5421-4deb-84e0-72a6d6fc78a6",
        nombre: "Monitor Gamer Curvo MSI Optix G32CQ4 | WQHD, 31.5”",
        precio: 785,
        moneda: "USD",
        marca: "Msi",
        caracteristicas: [
            "Tamaño: 34 pulgadas",
            "Resolución: 2560 x 1440",
            "Tiempo de respuesta: 1ms"
        ],
        stock: "2"
    }
]

export default productos;