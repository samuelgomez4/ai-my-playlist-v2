const samplePlaylist = [
  [
    'e1c0d1f0-1c0d-1f0e-1c0d-1f0e1c0d1f0e',
    'En Cero',
    ['Yandel', 'Sebastian Yatra', 'Manuel Turizo'],
    'En Cero',
    '3:43',
    'May 23, 2019',
    'Sep 20, 2023',
  ],
  [
    'b2c1d2e3-2c1d-2e3b-2c1d-2e3b2c1d2e3b',
    'Callaita',
    ['Bad Bunny', 'Tainy'],
    'Callaita',
    '4:10',
    'May 30, 2019',
    'Sep 20, 2023',
  ],
  [
    'c3d2e1f4-3d2e-1f4c-3d2e-1f4c3d2e1f4c',
    'Latina (feat. Maluma)',
    ['Reykon', 'Maluma'],
    'Latina (feat. Maluma)',
    '3:46',
    'May 30, 2019',
    'Sep 20, 2023',
  ],
  [
    'd4e3f2a5-4e3f-2a5d-4e3f-2a5d4e3f2a5d',
    'Amor Genuino',
    ['Ozuna'],
    'Amor Genuino',
    '2:59',
    'Jun 3, 2019',
    'Sep 20, 2023',
  ],
  [
    'e5f4a3b6-5f4a-3b6e-5f4a-3b6e5f4a3b6e',
    'Te Soñé De Nuevo',
    ['Ozuna'],
    'Te Soñé De Nuevo',
    '3:19',
    'Jun 5, 2019',
    'Sep 20, 2023',
  ],
  [
    'f6a5b4c7-6a5b-4c7f-6a5b-4c7f6a5b4c7f',
    'Cúrame (feat. Manuel Turizo)',
    ['Prince Royce', 'Manuel Turizo'],
    'Cúrame (feat. Manuel Turizo)',
    '3:23',
    'Jun 6, 2019',
    'Sep 20, 2023',
  ],
  [
    'a7b6c5d8-7b6c-5d8a-7b6c-5d8a7b6c5d8a',
    'Loco Contigo (with J. Balvin & Tyga)',
    ['DJ Snake', 'J Balvin', 'Tyga'],
    'Loco Contigo (with J. Balvin & Tyga)',
    '3:05',
    'Jun 12, 2019',
    'Sep 20, 2023',
  ],
  [
    'b8c7d6e9-8c7d-6e9b-8c7d-6e9b8c7d6e9b',
    'Dile la Verdad - Remix',
    ['Jowell & Randy', 'Manuel Turizo', 'Lyanno', 'Mau y Ricky', 'The Rudeboys'],
    'Dile la Verdad Remix',
    '4:35',
    'Jun 13, 2019',
    'Sep 20, 2023',
  ],
  [
    'c9d8e7f0-9d8e-7f0c-9d8e-7f0c9d8e7f0c',
    'Runaway',
    ['Sebastian Yatra', 'Daddy Yankee', 'NATTI NATASHA', 'Jonas Brothers'],
    'Runaway',
    '3:20',
    'Jun 20, 2019',
    'Sep 20, 2023',
  ],
  [
    'd0e9f8a1-0e9f-8a1d-0e9f-8a1d0e9f8a1d',
    'Si Supieras',
    ['Daddy Yankee', 'Wisin & Yandel'],
    'Si Supieras',
    '4:01',
    'Jun 27, 2019',
    'Sep 20, 2023',
  ],
  [
    'e1f0a9b2-1f0a-9b2e-1f0a-9b2e1f0a9b2e',
    'Una Vida Para Recordar',
    ['Piso 21', 'Myke Towers'],
    'Una Vida Para Recordar',
    '3:35',
    'Jul 4, 2019',
    'Sep 20, 2023',
  ],
  [
    'f2a1b0c3-2a1b-0c3f-2a1b-0c3f2a1b0c3f',
    'China',
    ['Anuel AA', 'Daddy Yankee', 'KAROL G', 'J Balvin', 'Ozuna'],
    'China',
    '5:01',
    'Jul 18, 2019',
    'Sep 20, 2023',
  ],
  [
    'a3b2c1d4-3b2c-1d4a-3b2c-1d4a3b2c1d4a',
    'Loco',
    ['Beéle'],
    'Loco',
    '3:24',
    'Aug 7, 2019',
    'Sep 20, 2023',
  ],
  [
    'b4c3d2e5-4c3d-2e5b-4c3d-2e5b4c3d2e5b',
    'Tutu',
    ['Camilo', 'Pedro Capó'],
    'Tutu',
    '2:58',
    'Aug 8, 2019',
    'Sep 20, 2023',
  ],
  [
    'c5d4e3f6-5d4e-3f6c-5d4e-3f6c5d4e3f6c',
    'Mami',
    ['Piso 21', 'Black Eyed Peas'],
    'Mami',
    '3:49',
    'Aug 8, 2019',
    'Sep 20, 2023',
  ],
  [
    'd6e5f4a7-6e5f-4a7d-6e5f-4a7d6e5f4a7d',
    'Adicto (with Anuel AA & Ozuna)',
    ['Tainy', 'Anuel AA', 'Ozuna'],
    'Adicto (with Anuel AA & Ozuna)',
    '4:30',
    'Aug 21, 2019',
    'Sep 20, 2023',
  ],
  [
    'e7f6a5b8-7f6a-5b8e-7f6a-5b8e7f6a5b8e',
    'Indeciso',
    ['Reik', 'J Balvin', 'Lalo Ebratt'],
    'Indeciso',
    '3:37',
    'Aug 22, 2019',
    'Sep 20, 2023',
  ],
  [
    'f8a7b6c9-8a7b-6c9f-8a7b-6c9f8a7b6c9f',
    'Te Quemaste',
    ['Manuel Turizo', 'Anuel AA'],
    'ADN',
    '3:19',
    'Aug 22, 2019',
    'Sep 20, 2023',
  ],
  [
    'a9b8c7d0-9b8c-7d0a-9b8c-7d0a9b8c7d0a',
    'El Favor (with Nicky Jam & Sech, feat. Farruko, Zion & Lunay)',
    ['Dímelo Flow', 'Nicky Jam', 'Sech', 'Farruko', 'Zion', 'Lunay'],
    'El Favor (with Nicky Jam & Sech, feat. Farruko, Zion & Lunay)',
    '3:53',
    'Aug 29, 2019',
    'Sep 20, 2023',
  ],
  [
    'b0c9d8e1-0c9d-8e1b-0c9d-8e1b0c9d8e1b',
    'Bota Fuego - con Nicky Jam',
    ['Mau y Ricky', 'Nicky Jam'],
    'Bota Fuego (con Nicky Jam)',
    '3:43',
    'Oct 10, 2019',
    'Sep 20, 2023',
  ],
];

export const samplePlaylistString = JSON.stringify(samplePlaylist);
