const images = [
    {
        tags: ['', 'Water'],
        name: "IMGP1256.jpg",
        orientation: 'portrait',
        caption: 'Nottinghamshire | Pentax k3ii',
    },
    {

        tags: ['Water', ''],
        name: "IMGP1325.jpg",
        orientation: 'portrait',
        caption: 'Nottinghamshire | pentax k3ii',

    },
    {
        tags: ['', 'Trees', 'Mist'],
        name: "IMGP1349.jpg",
        orientation: 'landscape',
        caption: 'Nottingham | Pentax k3ii',
    },
    {
        tags: ['', 'Mist', 'Trees'],
        name: "IMGP1358.jpg",
        orientation: 'portrait',
        caption: 'Nottingham | Pentax k3ii',
    },
    {
        tags: ['', 'Water'],
        name: "IMGP2291.jpg",
        orientation: 'landscape',
        caption: 'Yorkshire Dales | Pentax k3ii',
    },
    {
        tags: ['', 'Trees'],
        name: "IMGP2316.jpg",
        orientation: 'landscape',
        caption: 'Yorkshire Dales | Pentax k3ii',
    },
    {
        tags: ['', 'Water'],
        name: "IMGP2322.jpg",
        orientation: 'portrait',
        caption: 'Yorkshire Dales | Pentax k3ii',
    },
    {
        tags: [ '', 'Black and White', 'Trees', 'Water' ],
        name: "IMGP2391.jpg",
        orientation: 'portrait',
        caption: 'Yorkshire Dales | Pentax k3ii',
    },
    {
        tags: [ '', 'Water' ],
        name: "IMGP2437.jpg",
        orientation: 'portrait',
        caption: 'Yorkshire Dales | Pentax k3ii',
    },
    {
        tags: [ '', 'Water' ],
        name: "IMGP2440.jpg",
        orientation: 'portrait',
        caption: 'Yorkshire Dales | Pentax k3ii',
    },
    {
        tags: [ '', 'Light' ],
        name: "IMGP2642.jpg",
        orientation: 'landscape',
        caption: 'Nottinghamshire | Pentax k3ii',
    },
    {
        tags: [ '', 'Black and White', 'Trees' ],
        name: "IMGP2667.jpg",
        orientation: 'square',
        caption: 'Derbshire | Pentax k3ii',
    },
    {
        tags: [ '', 'Trees' ],
        name: "IMGP2693-Edit.jpg",
        orientation: 'square',
        caption: 'Nottinghamshire | Pentax k3ii'
    },
    {
        tags: [ '', 'Light', 'Trees' ],
        name: "IMGP2712-Pano-Edit.jpg",
        orientation: 'landscape',
        caption: 'Nottinghamshire | Pentax k3ii',
    },
    {
        tags: [ '', 'Light', 'Urban' ],
        name: "IMGP2739.jpg",
        orientation: 'portrait',
        caption: 'Nottingham | Pentax k3ii',
    },
    {
        tags: [ '', 'Urban', 'Light' ],
        name: "IMGP2742.jpg",
        orientation: 'landscape',
        caption: 'Nottingham | Pentax k3ii',
    },
    {
        tags: [ '', 'Urban' ],
        name: "IMGP2833.jpg",
        orientation: 'portrait',
        caption: 'Nottingham | Pentax k3ii',
    },
    {
        tags: [ '', 'Urban', 'Black and White' ],
        name: "IMGP2842.jpg",
        orientation: 'portrait',
        caption: 'Nottingham | Pentax k3ii',
    },
    {
        tags: [ '', 'Urban', 'Black and White' ],
        name: "IMGP2844.jpg",
        orientation: 'portrait',
        caption: 'Nottingham | Pentax k3ii',
    },
    {
        tags: [ '', 'Detail' ],
        name: "IMGP2852.jpg",
        orientation: 'portrait',
        caption: 'Nottingham | Pentax k3ii',
    },
    {
        tags: [ '', 'Detail' ],
        name: "IMGP2859.jpg",
        orientation: 'landscape',
        caption: 'Nottingham | Pentax k3ii',
    },
    {
        tags: [ '', 'Black and White', 'Detail' ],
        name: "IMGP2868.jpg",
        orientation: 'portrait',
        caption: 'Nottingham | Pentax k3ii',
    },
    {
        tags: [ '', 'Mountains', 'Trees', 'Light', 'Water' ],
        name: "IMGP2881.jpg",
        orientation: 'portrait',
        caption: 'Peak District | Pentax k3ii',
    },
    {
        tags: [ '', 'Mountains', 'Light' ],
        name: "IMGP2972.jpg",
        orientation: 'landscape',
        caption: 'Peak District | Pentax k3ii',
    },
    {
        tags: [ '', 'Water' ],
        name: "IMGP3728-Edit.jpg",
        orientation: 'portrait',
        caption: 'Peak District | Pentax k3ii',
    },
    {
        tags: [ '', 'Water' ],
        name: "IMGP3778-Edit.jpg",
        orientation: 'landscape',
        caption: 'Peak District | Pentax k3ii',
    },
    {
        tags: [ '', 'Light' ],
        name: "IMGP3817.jpg",
        orientation: 'portrait',
        caption: 'Nottinghamshire | Pentax k3ii',
    },
    {
        tags: [ '', 'Trees', 'Detail' ],
        name: "IMGP3840.jpg",
        orientation: 'landscape',
        caption: 'Nottinghamshire | Pentax k3ii',
    },
    {
        tags: [ '', 'Water' ],
        name: "IMGP4257-Edit.jpg",
        orientation: 'portrait',
        caption: 'Yorkshire Dales | Pentax k3ii',
    },
    {
        tags: [ '', 'Light', 'Mountains', 'Black and White' ],
        name: "IMGP4290-2.jpg",
        orientation: 'landscape',
        caption: 'Yorkshire Dales | Pentax k3ii',
    },
    {
        tags: [ '', 'Detail' ],
        name: "IMGP4354.jpg",
        orientation: 'square',
        caption: 'Yorkshire Dales | Pentax k3ii',
    },
    {
        tags: [ '', 'Water', 'Trees' ],
        name: "IMGP4378.jpg",
        orientation: 'portrait',
        caption: 'Yorkshire Dales | Pentax k3ii',
    },
    {
        tags: [ '', 'Black and White', ],
        name: "IMGP4386.jpg",
        orientation: 'landscape',
        caption: 'Amsterdam | Olympus OM10 | HP5'
    },
    {
        tags: [ '', 'Light' ],
        name: "IMGP4404.jpg",
        orientation: 'portrait',
        caption: 'Nottinghamshire | Pentax k3ii',
    },
    {
        tags: [ '', 'Detail' ],
        name: "IMGP4444.jpg",
        orientation: 'landscape',
        caption: 'Nottinghamshire | Pentax k3ii',
    },
    {
        tags: [ '', 'Trees' ],
        name: "IMGP4456.jpg",
        orientation: 'square',
        caption: 'Nottinghamshire | Pentax k3ii',
    },
    {
        tags: [ '', 'Trees'],
        name: "IMGP4458-Pano.jpg",
        orientation: 'landscape',
        caption: 'Nottinghamshire | Pentax k3ii',
    },
    {
        tags: [ '', 'Detail' ],
        name: "IMGP4468-Edit.jpg",
        orientation: 'portrait',
        caption: 'Nottinghamshire | Pentax k3ii',
    },
    {
        tags: [ '', 'Detail' ],
        name: "IMGP4470.jpg",
        orientation: 'landscape',
        caption: 'Nottinghamshire | Pentax k3ii',
    },
    {
        tags: [ '', 'Light', 'Trees' ],
        name: "IMGP4489-HDR.jpg",
        orientation: 'square',
        caption: 'Nottinghamshire | Pentax k3ii',
    },
    {
        tags: [ '', 'Trees', 'Detail' ],
        name: "IMGP4505.jpg",
        orientation: 'portrait',
        caption: 'Nottinghamshire | Pentax k3ii',
    },
    {
        tags: [ '', 'Urban', 'Black and White'],
        name: "IMGP4523-Pano.jpg",
        orientation: 'portrait',
        caption: 'Notttingham | Olympus OM10 | HP5',
    },
    {
        tags: [ '', 'Mountains', ],
        name: "IMGP4569.jpg",
        orientation: 'portrait',
        caption: 'Peak District | Pentax k3ii',
    },
    {
        tags: [ '', 'Water', 'Trees' ],
        name: "IMGP4585-Edit.jpg",
        orientation: 'square',
        caption: 'Peak District | Pentax k3ii',
    },
    {
        tags: [ '', 'Light', ],
        name: "IMGP4766-Edit-2.jpg",
        orientation: 'landscape',
        caption: 'Peak District | Pentax k3ii',
    },
    {
        tags: [ '', 'Water', 'Trees' ],
        name: "IMGP5035.jpg",
        orientation: 'square',
        caption: 'Peak District | Pentax k3ii',
    },
    {
        tags: [ '', 'Water', 'Trees', 'Black and White' ],
        name: "IMGP5042.jpg",
        orientation: 'square',
        caption: 'Peak District | Pentax k3ii',
    },
    {
        tags: [ '', 'Water' ],
        name: "IMGP5051-Edit.jpg",
        orientation: 'portrait',
        caption: 'Peak District | Pentax k3ii',
    },
    {
        tags: [ '', 'Water', 'Black and White' ],
        name: "IMGP5075.jpg",
        orientation: 'portrait',
        caption: 'Peak District | Pentax k3ii',
    },
    {
        tags: [ '', 'Black and White', 'Trees' ],
        name: "IMGP5098.jpg",
        orientation: 'landscape',
        caption: 'Derbyshire | Pentax k3ii',
    },
    {
        tags: [ '', 'Trees', 'Light' ],
        name: "IMGP5103.jpg",
        orientation: 'portrait',
        caption: 'Nottinghamshire | Pentax k3ii',
    },
    {
        tags: [ '', 'Trees', 'Black and White'],
        name: "IMGP5139.jpg",
        orientation: 'square',
        caption: 'Peak District | Yashica 120 | HP5',
    },
    {
        tags: [ '', 'Water' ],
        name: "IMGP5142.jpg",
        orientation: 'landscape',
        caption: 'Yorkshire Dales | Pentax k3ii',
    },
    {
        tags: [ '', 'Water' ],
        name: "IMGP5190-Edit.jpg",
        orientation: 'landscape',
        caption: 'Yorkshire Dales | Pentax k3ii',
    },
    {
        tags: [ '', 'Water' ],
        name: "IMGP5235-Edit.jpg",
        orientation: 'landscape',
        caption: 'Yorkshire Dales | Pentax k3ii'
    },
    {
        tags: [ '', 'Trees', 'Light' ],
        name: "IMGP5312.jpg",
        orientation: 'landscape',
        caption: 'Nottinghamshire | Pentax k3ii',
    },
    {
        tags: [ '', 'Light', 'Trees' ],
        name: "IMGP5322.jpg",
        orientation: 'landscape',
        caption: 'Nottinghamshire | Pentax k3ii',
    },
    {
        tags: [ '', 'Trees' ],
        name: "IMGP5330-Pano-Edit.jpg",
        orientation: 'landscape',
        caption: 'Peak District | Pentax k3ii',
    },
    {
        tags: [ '', 'Black and White'],
        name: "IMGP5401.jpg",
        orientation: 'square',
        caption: 'Peak District | Yashica 120 | HP5'
    },
    {
        tags: [ '', 'Urban', 'Black and White' ],
        name: "IMGP5420.jpg",
        orientation: 'portrait',
        caption: 'Nottingham | Olympus OM10 | HP5',
    },
    {
        tags: [ '', 'Urban', 'Black and White' ],
        name: "IMGP5442.jpg",
        orientation: 'portrait',
        caption: 'Nottingham | Olympus OM10 | HP5',
    },
    {
        tags: [ '', 'Urban', 'Black and White'],
        name: "IMGP5466.jpg",
        orientation: 'portrait',
        caption: 'Nottingham | Olympus OM-10 | HP5',
    },
    {
        tags: [ '', 'Light',],
        name: "IMGP5704-HDR.jpg",
        orientation: 'landscape',
        caption: 'Lake District | Pentax k3ii',
    },
    {
        tags: [ '', 'Mountains', ],
        name: "IMGP5714-Pano.jpg",
        orientation: 'landscape',
        caption: 'Lake District | Pentax k3ii',
    },
    {
        tags: [ '', 'Light' ],
        name: "IMGP5717.jpg",
        orientation: 'square',
        caption: 'Lake District | Pentax k3ii',
    },
    {
        tags: [ '', 'Water', 'Mist' ],
        name: "IMGP5820.jpg",
        orientation: 'landscape',
        caption: 'Lake District | Pentax k3ii',
    },
    {
        tags: [ '', 'Trees', 'Mist' ],
        name: "IMGP5924.jpg",
        orientation: 'landscape',
        caption: 'Peak District | Pentax k3ii',
    },
    {
        tags: [ '', 'Trees', 'Mist' ],
        name: "IMGP5925.jpg",
        orientation: 'portrait',
        caption: 'Peak District | Pentax k3ii',
    },
    {
        tags: [ '', 'Light' ],
        name: "IMGP6922.jpg",
        orientation: 'landscape',
        caption: 'Nottinghamshire | Pentax k3ii',
    },
    {
        tags: [ '', 'Trees', 'Mist' ],
        name: "IMGP5927.jpg",
        orientation: 'portrait',
        caption: 'Peak District | Pentax k3ii',
    },
    {
        tags: [ '', 'Trees', 'Mist' ],
        name: "IMGP5929.jpg",
        orientation: 'portrait',
        caption: 'Peak District | Pentax k3ii'
    },
    {
        tags: [ '', 'Light', 'Trees' ],
        name: "IMGP6835.jpg",
        orientation: 'square',
        caption: 'Nottinghamshire | Pentax k3ii',
    },
    {
        tags: [ '', 'Trees', 'Mist' ],
        name: "IMGP5930.jpg",
        orientation: 'portrait',
        caption: 'Peak District | Pentax k3ii'
    },
    {
        tags: [ '', 'Trees', 'Light' ],
        name: "IMGP5936.jpg",
        orientation: 'portrait',
        caption: 'Peak District | Pentax k3ii',
    },
    {
        tags: [ '', 'Water' ],
        name: "IMGP6931-Edit.jpg",
        orientation: 'square',
        caption: 'Peak District | Yashica 120 | Portra 160',
    },
    {
        tags: [ '', 'Trees' ],
        name: "IMGP6945.jpg",
        orientation: 'landscape',
        caption: 'Nottinghamshire | Pentax k3ii',
    },
];

const photoArray = (filter) => {
    if (filter === 'All') {
        filter = '';
    }
    let array = [];
    for (let image of images) {
        let tags = image.tags;
        for (let tag of tags) {
            if (tag === filter) {
                array.push(image);
            }
        }
    }
    return array.slice().reverse();
}
const filterArray = () => {
    let array = [];
    for (let image of images) {
        let tags = image.tags;
        for (let tag of tags) {
          if (tag === '') {
            tag = 'All'
          };
          array.push(tag);
        }
    }
    return [...new Set(array)]
}


export {
    photoArray,
    filterArray,
}