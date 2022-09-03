const users = [
  {
    _id: "6311681f996c646b1f81997b",
    googleId: 100616319075678080000,
    email: "bohyeon.kim@creatrip.com",
    displayName: "Bohyeon Kim",
    firstName: "Bohyeon",
    lastName: "Kim",
    profilePicUrl:
      "https://lh3.googleusercontent.com/a/AItbvmkSJ_xTohZASxEYTNzTumaAkOEK36BQqs38Q60V=s96-c",
    myCollectionsArr: ["6312cd792a4f77334033a9bd", "6312cd792a4f77334033a9c1"],
    likedCollectionsArr: ["6312cd792a4f77334033a9c3"],
    createdAt: "2022-08-30T07:02:22.737+00:00",
  },
  {
    _id: "63118adb34c4109b398b1293",
    googleId: 114468525483681450000,
    email: "love.free.work@gmail.com",
    displayName: "Bohyeon Kim",
    firstName: "Bohyeon",
    lastName: "Kim",
    profilePicUrl:
      "https://lh3.googleusercontent.com/a/AItbvmmUdDch2QKNWgijUsMvskVPeT9WDqEiABVBdIme=s96-c",
    myCollectionsArr: ["6312cd792a4f77334033a9c2", "6312cd792a4f77334033a9be"],
    likedCollectionsArr: ["6312cd792a4f77334033a9c3"],
    createdAt: "2022-08-30T08:28:14.357+00:00",
  },
  {
    _id: "6312ad8b5057863778c220ca",
    googleId: 113490520324722500000,
    email: "hemi33379@gmail.com",
    displayName: "Hyemi Kim",
    firstName: "Hyemi",
    lastName: "Kim",
    profilePicUrl:
      "https://lh3.googleusercontent.com/a/AItbvml_ySVSzUsDoVOQmADwCbMTCR_8vtAgEGCmy0qy=s96-c",
    myCollectionsArr: ["6312cd792a4f77334033a9bf", "6312cd792a4f77334033a9c3"],
    likedCollectionsArr: ["6312cd792a4f77334033a9bd"],
    createdAt: "2022-08-20T02:34:23.144+00:00",
  },
  {
    _id: "6312acff0d1edb937f39b190",
    googleId: 116283305152524710000,
    email: "apod123@naver.com",
    displayName: "김승민",
    firstName: "승민",
    lastName: "김",
    profilePicUrl:
      "https://lh3.googleusercontent.com/a/AItbvmm-deZJTslcxU7fDYb_sjfF4QzZVT2C6YXtsmc=s96-c",
    myCollectionsArr: ["6312cd792a4f77334033a9c0"],
    likedCollectionsArr: ["6312cd792a4f77334033a9bf"],
    createdAt: "2022-08-20T03:36:15.519+00:00",
  },
];

const collections = [
  {
    _id: "6312cd792a4f77334033a9bd",
    user_id: "6311681f996c646b1f81997b",
    collectionTitle: "시간이 아깝지 않은 개발 강의",
    description: "시간이 아깝지 않은 개발 강의를 모아봤어요",
    videos: [
      "6312c7b4d3084a7cb866bb8d",
      "6312c7b4d3084a7cb866bb8e",
      "6312c7b4d3084a7cb866bb8f",
    ],
    likes: 10,
    category_id: "6312c45c65fc44c5a50ee0f0",
    createdAt: "2022-08-30T07:02:22.737+00:00",
  },
  {
    _id: "6312cd792a4f77334033a9be",
    user_id: "63118adb34c4109b398b1293",
    collectionTitle: "또 듣고 싶은 신나는 음악",
    description: "또 듣고 싶은 신나는 음악입니다.",
    videos: [
      "6312c7b4d3084a7cb866bb90",
      "6312c7b4d3084a7cb866bba2",
      "6312c7b4d3084a7cb866bba3",
      "6312c7b4d3084a7cb866bba1",
    ],
    likes: 12,
    category_id: "6312c45c65fc44c5a50ee0e0",
    createdAt: "2022-08-30T08:28:14.357+00:00",
  },
  {
    _id: "6312cd792a4f77334033a9bf",
    user_id: "6312ad8b5057863778c220ca",
    collectionTitle: "내가 좋아하는 영화 요약",
    description: "내가 좋아하는 영화 요약을 모아봤습니다.",
    videos:
      '["6312c7b4d3084a7cb866bb9f". "6312c7b4d3084a7cb866bb9f", "6312c7b4d3084a7cb866bb99"]',
    likes: 3,
    category_id: "6312c45c65fc44c5a50ee0dd",
    createdAt: "2022-08-20T02:34:23.144+00:00",
  },
  {
    _id: "6312cd792a4f77334033a9c0",
    user_id: "6312acff0d1edb937f39b190",
    collectionTitle: "갬성 터지는 음악",
    description: "갬성 터지는 음악 너무 좋아요",
    videos: [
      "6312c7b4d3084a7cb866bba0",
      "6312c7b4d3084a7cb866bba2",
      "6312c7b4d3084a7cb866bb91",
      "6312c7b4d3084a7cb866bb9d",
    ],
    likes: 4,
    category_id: "6312c45c65fc44c5a50ee0e0",
    createdAt: "2022-08-30T07:02:22.737+00:00",
  },
  {
    _id: "6312cd792a4f77334033a9c1",
    user_id: "6311681f996c646b1f81997b",
    collectionTitle: "그냥 또 보고 싶은 영상",
    description: "그냥 또 보고 싶은 영상들입니다.",
    videos: [
      "6312c7b4d3084a7cb866bb93",
      "6312c7b4d3084a7cb866bb95",
      "6312c7b4d3084a7cb866bb97",
    ],
    likes: 7,
    category_id: "6312c45c65fc44c5a50ee0e4",
    createdAt: "2022-08-30T08:28:14.357+00:00",
  },
  {
    _id: "6312cd792a4f77334033a9c2",
    user_id: "63118adb34c4109b398b1293",
    collectionTitle: "동기부여 영상",
    description: "동기부여 빡!",
    videos:
      '["6312c7b4d3084a7cb866bb97". "6312c7b4d3084a7cb866bb98", "6312c7b4d3084a7cb866bb9b"]',
    likes: 8,
    category_id: "6312c45c65fc44c5a50ee0e4",
    createdAt: "2022-08-20T02:34:23.144+00:00",
  },
  {
    _id: "6312cd792a4f77334033a9c3",
    user_id: "6312ad8b5057863778c220ca",
    collectionTitle: "운동 뿌시는 영상",
    description: "운동 뿌셔봅시다.",
    videos: [
      "6312c7b4d3084a7cb866bb99",
      "6312c7b4d3084a7cb866bb9c",
      "6312c7b4d3084a7cb866bb9a",
    ],
    likes: 2,
    category_id: "6312c45c65fc44c5a50ee0de",
    createdAt: "2022-08-20T03:36:15.519+00:00",
  },
];

const comments = [
  {
    _id: "6312d012a7da0aea2f2cfdd7",
    user_id: "6311681f996c646b1f81997b",
    collection_id: "6312cd792a4f77334033a9bd",
    comment: "와 이영상들 너무 좋다",
    createdAt: "2022-08-30T07:02:22.737+00:00",
  },
  {
    _id: "6312d012a7da0aea2f2cfdd8",
    user_id: "63118adb34c4109b398b1293",
    collection_id: "6312cd792a4f77334033a9be",
    comment: "퍼가요",
    createdAt: "2022-08-30T08:28:14.357+00:00",
  },
  {
    _id: "6312d012a7da0aea2f2cfdd9",
    user_id: "6312ad8b5057863778c220ca",
    collection_id: "6312cd792a4f77334033a9bf",
    comment: "너무너무 좋습니다.",
    createdAt: "2022-08-20T02:34:23.144+00:00",
  },
  {
    _id: "6312d012a7da0aea2f2cfdda",
    user_id: "6312acff0d1edb937f39b190",
    collection_id: "6312cd792a4f77334033a9c0",
    comment: "동기부여  빡됩니다.",
    createdAt: "2022-08-30T07:02:22.737+00:00",
  },
  {
    _id: "6312d012a7da0aea2f2cfddb",
    user_id: "6311681f996c646b1f81997b",
    collection_id: "6312cd792a4f77334033a9c1",
    comment: "좋아요~~~",
    createdAt: "2022-08-30T07:02:22.737+00:00",
  },
  {
    _id: "6312d012a7da0aea2f2cfddc",
    user_id: "63118adb34c4109b398b1293",
    collection_id: "6312cd792a4f77334033a9c2",
    comment: "나도 좋아요~~",
    createdAt: "2022-08-30T08:28:14.357+00:00",
  },
  {
    _id: "6312d012a7da0aea2f2cfddd",
    user_id: "6312ad8b5057863778c220ca",
    collection_id: "6312cd792a4f77334033a9c3",
    comment: "또 들를게요!",
    createdAt: "2022-08-20T02:34:23.144+00:00",
  },
  {
    _id: "6312d012a7da0aea2f2cfdde",
    user_id: "6312acff0d1edb937f39b190",
    collection_id: "6312cd792a4f77334033a9bd",
    comment: "이 컬렉션 좋습니다!",
    createdAt: "2022-08-30T07:02:22.737+00:00",
  },
  {
    _id: "6312d012a7da0aea2f2cfddf",
    user_id: "6311681f996c646b1f81997b",
    collection_id: "6312cd792a4f77334033a9be",
    comment: "오오오오",
    createdAt: "2022-08-30T07:02:22.737+00:00",
  },
  {
    _id: "6312d012a7da0aea2f2cfde0",
    user_id: "63118adb34c4109b398b1293",
    collection_id: "6312cd792a4f77334033a9bf",
    comment: "짱짱",
    createdAt: "2022-08-30T08:28:14.357+00:00",
  },
  {
    _id: "6312d012a7da0aea2f2cfde1",
    user_id: "6312ad8b5057863778c220ca",
    collection_id: "6312cd792a4f77334033a9c0",
    comment: "감성 터져요",
    createdAt: "2022-08-20T02:34:23.144+00:00",
  },
  {
    _id: "6312d012a7da0aea2f2cfde2",
    user_id: "6312acff0d1edb937f39b190",
    collection_id: "6312cd792a4f77334033a9c1",
    comment: "우어어어어",
    createdAt: "2022-08-30T07:02:22.737+00:00",
  },
];

const categoriesToShow = [
  {
    _id: "6312c45c65fc44c5a50ee0db",
    categoryName: "여행",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:31",
  },
  {
    _id: "6312c45c65fc44c5a50ee0dc",
    categoryName: "일상",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:32",
  },
  {
    _id: "6312c45c65fc44c5a50ee0dd",
    categoryName: "엔터테이먼트/방송",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:33",
  },
  {
    _id: "6312c45c65fc44c5a50ee0de",
    categoryName: "운동",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:34",
  },
  {
    _id: "6312c45c65fc44c5a50ee0df",
    categoryName: "먹방/요리",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:35",
  },
  {
    _id: "6312c45c65fc44c5a50ee0e0",
    categoryName: "음악/플레이리스트",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:36",
  },
  {
    _id: "6312c45c65fc44c5a50ee0e1",
    categoryName: "동물",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:37",
  },
  {
    _id: "6312c45c65fc44c5a50ee0e2",
    categoryName: "뷰티 /패션",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:38",
  },
  {
    _id: "6312c45c65fc44c5a50ee0e3",
    categoryName: "게임",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:39",
  },
  {
    _id: "6312c45c65fc44c5a50ee0e4",
    categoryName: "교육",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:40",
  },
  {
    _id: "6312c45c65fc44c5a50ee0e5",
    categoryName: "시사/정치/뉴스",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:41",
  },
  {
    _id: "6312c45c65fc44c5a50ee0e6",
    categoryName: "모빌리티",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:42",
  },
  {
    _id: "6312c45c65fc44c5a50ee0e7",
    categoryName: "자연",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:43",
  },
  {
    _id: "6312c45c65fc44c5a50ee0e8",
    categoryName: "경제",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:44",
  },
  {
    _id: "6312c45c65fc44c5a50ee0e9",
    categoryName: "공예/취미",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:45",
  },
  {
    _id: "6312c45c65fc44c5a50ee0ea",
    categoryName: "홈인테리어",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:46",
  },
  {
    _id: "6312c45c65fc44c5a50ee0eb",
    categoryName: "기타",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:47",
  },
];

const categories = [
  {
    _id: "6312c45c65fc44c5a50ee0bd",
    categoryName: "영화, 애니메이션",
    youtubeCategoryId: 1,
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:00",
  },
  {
    _id: "6312c45c65fc44c5a50ee0be",
    categoryName: "자동차",
    youtubeCategoryId: 2,
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:01",
  },
  {
    _id: "6312c45c65fc44c5a50ee0bf",
    categoryName: "음악",
    youtubeCategoryId: 10,
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:02",
  },
  {
    _id: "6312c45c65fc44c5a50ee0c0",
    categoryName: "동물과 애완동물",
    youtubeCategoryId: 15,
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:03",
  },
  {
    _id: "6312c45c65fc44c5a50ee0c1",
    categoryName: "스포츠",
    youtubeCategoryId: 17,
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:04",
  },
  {
    _id: "6312c45c65fc44c5a50ee0c2",
    categoryName: "단편영화",
    youtubeCategoryId: 18,
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:05",
  },
  {
    _id: "6312c45c65fc44c5a50ee0c3",
    categoryName: "여행",
    youtubeCategoryId: 19,
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:06",
  },
  {
    _id: "6312c45c65fc44c5a50ee0c4",
    categoryName: "게임",
    youtubeCategoryId: 20,
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:07",
  },
  {
    _id: "6312c45c65fc44c5a50ee0c5",
    categoryName: "브이로그",
    youtubeCategoryId: 21,
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:08",
  },
  {
    _id: "6312c45c65fc44c5a50ee0c6",
    categoryName: "인물/블로그",
    youtubeCategoryId: 22,
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:09",
  },
  {
    _id: "6312c45c65fc44c5a50ee0c7",
    categoryName: "코미디",
    youtubeCategoryId: 23,
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:10",
  },
  {
    _id: "6312c45c65fc44c5a50ee0c8",
    categoryName: "엔터테인먼트",
    youtubeCategoryId: 24,
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:11",
  },
  {
    _id: "6312c45c65fc44c5a50ee0c9",
    categoryName: "뉴스/정치",
    youtubeCategoryId: 25,
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:12",
  },
  {
    _id: "6312c45c65fc44c5a50ee0ca",
    categoryName: "노하우/스타일",
    youtubeCategoryId: 26,
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:13",
  },
  {
    _id: "6312c45c65fc44c5a50ee0cb",
    categoryName: "교육",
    youtubeCategoryId: 27,
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:14",
  },
  {
    _id: "6312c45c65fc44c5a50ee0cc",
    categoryName: "과학기술",
    youtubeCategoryId: 28,
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:15",
  },
  {
    _id: "6312c45c65fc44c5a50ee0cd",
    categoryName: "영화",
    youtubeCategoryId: 30,
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:16",
  },
  {
    _id: "6312c45c65fc44c5a50ee0ce",
    categoryName: "애니메",
    youtubeCategoryId: 31,
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:17",
  },
  {
    _id: "6312c45c65fc44c5a50ee0cf",
    categoryName: "액션/어드벤처",
    youtubeCategoryId: 32,
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:18",
  },
  {
    _id: "6312c45c65fc44c5a50ee0d0",
    categoryName: "클래식",
    youtubeCategoryId: 33,
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:19",
  },
  {
    _id: "6312c45c65fc44c5a50ee0d1",
    categoryName: "다큐멘터리",
    youtubeCategoryId: 35,
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:21",
  },
  {
    _id: "6312c45c65fc44c5a50ee0d2",
    categoryName: "드라마",
    youtubeCategoryId: 36,
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:22",
  },
  {
    _id: "6312c45c65fc44c5a50ee0d3",
    categoryName: "가족",
    youtubeCategoryId: 37,
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:23",
  },
  {
    _id: "6312c45c65fc44c5a50ee0d4",
    categoryName: "외국",
    youtubeCategoryId: 38,
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:24",
  },
  {
    _id: "6312c45c65fc44c5a50ee0d5",
    categoryName: "호러",
    youtubeCategoryId: 39,
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:25",
  },
  {
    _id: "6312c45c65fc44c5a50ee0d6",
    categoryName: "공상과학",
    youtubeCategoryId: 40,
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:26",
  },
  {
    _id: "6312c45c65fc44c5a50ee0d7",
    categoryName: "스릴러",
    youtubeCategoryId: 41,
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:27",
  },
  {
    _id: "6312c45c65fc44c5a50ee0d8",
    categoryName: "쇼츠",
    youtubeCategoryId: 42,
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:28",
  },
  {
    _id: "6312c45c65fc44c5a50ee0d9",
    categoryName: "프로그램",
    youtubeCategoryId: 43,
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:29",
  },
  {
    _id: "6312c45c65fc44c5a50ee0da",
    categoryName: "트레일러",
    youtubeCategoryId: 44,
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:30",
  },
  {
    _id: "6312c45c65fc44c5a50ee0db",
    categoryName: "여행",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:31",
  },
  {
    _id: "6312c45c65fc44c5a50ee0dc",
    categoryName: "일상",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:32",
  },
  {
    _id: "6312c45c65fc44c5a50ee0dd",
    categoryName: "엔터테이먼트/방송",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:33",
  },
  {
    _id: "6312c45c65fc44c5a50ee0de",
    categoryName: "운동",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:34",
  },
  {
    _id: "6312c45c65fc44c5a50ee0df",
    categoryName: "먹방/요리",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:35",
  },
  {
    _id: "6312c45c65fc44c5a50ee0e0",
    categoryName: "음악/플레이리스트",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:36",
  },
  {
    _id: "6312c45c65fc44c5a50ee0e1",
    categoryName: "동물",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:37",
  },
  {
    _id: "6312c45c65fc44c5a50ee0e2",
    categoryName: "뷰티 /패션",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:38",
  },
  {
    _id: "6312c45c65fc44c5a50ee0e3",
    categoryName: "게임",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:39",
  },
  {
    _id: "6312c45c65fc44c5a50ee0e4",
    categoryName: "교육",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:40",
  },
  {
    _id: "6312c45c65fc44c5a50ee0e5",
    categoryName: "시사/정치/뉴스",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:41",
  },
  {
    _id: "6312c45c65fc44c5a50ee0e6",
    categoryName: "모빌리티",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:42",
  },
  {
    _id: "6312c45c65fc44c5a50ee0e7",
    categoryName: "자연",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:43",
  },
  {
    _id: "6312c45c65fc44c5a50ee0e8",
    categoryName: "경제",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:44",
  },
  {
    _id: "6312c45c65fc44c5a50ee0e9",
    categoryName: "공예/취미",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:45",
  },
  {
    _id: "6312c45c65fc44c5a50ee0ea",
    categoryName: "홈인테리어",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:46",
  },
  {
    _id: "6312c45c65fc44c5a50ee0eb",
    categoryName: "기타",
    youtubeCategoryId: "",
    isVisible: "TRUE",
    createdAt: "2022-08-30T07:02:22.737+00:47",
  },
  {
    _id: "6312c45c65fc44c5a50ee0ec",
    categoryName: "인기 있는",
    youtubeCategoryId: "",
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:48",
  },
  {
    _id: "6312c45c65fc44c5a50ee0ed",
    categoryName: "랜덤 추천목록 1",
    youtubeCategoryId: "",
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:49",
  },
  {
    _id: "6312c45c65fc44c5a50ee0ee",
    categoryName: "랜덤 추천목록 2",
    youtubeCategoryId: "",
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:50",
  },
  {
    _id: "6312c45c65fc44c5a50ee0ef",
    categoryName: "오늘 올라온",
    youtubeCategoryId: "",
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:51",
  },
  {
    _id: "6312c45c65fc44c5a50ee0f0",
    categoryName: "과학기술",
    youtubeCategoryId: "",
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:52",
  },
  {
    _id: "6312c45c65fc44c5a50ee0f1",
    categoryName: "전자제품",
    youtubeCategoryId: "",
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:53",
  },
  {
    _id: "6312c45c65fc44c5a50ee0f2",
    categoryName: "언박싱",
    youtubeCategoryId: "",
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:54",
  },
  {
    _id: "6312c45c65fc44c5a50ee0f3",
    categoryName: "브이로그",
    youtubeCategoryId: "",
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:55",
  },
  {
    _id: "6312c45c65fc44c5a50ee0f4",
    categoryName: "오늘의 트렌드",
    youtubeCategoryId: "",
    isVisible: "FALSE",
    createdAt: "2022-08-30T07:02:22.737+00:56",
  },
];

const videos = [
  {
    "_id :": "6312c7b4d3084a7cb866bb8d",
    videoId: "PZIPsKgWJiw",
    videoTitle: "JavaScript - 오리엔테이션",
    channelId: "UCvc8kv-i5fvFTJBFAk6n1SA",
    category_id: "6312c45c65fc44c5a50ee0f0",
    thumbnails: "https://i.ytimg.com/vi/PZIPsKgWJiw/mqdefault.jpg",
    description: "생활코딩 자바스크립트",
    createdAt: "2022-08-30T07:02:22.737+00:31",
  },
  {
    "_id :": "6312c7b4d3084a7cb866bb8e",
    videoId: "hU4kULhOdNE",
    videoTitle: "개발자 망하게 하는 사고방식 😱 (개발팁 5가지)",
    channelId: "UC_4u-bXaba7yrRz_6x6kb_w",
    category_id: "6312c45c65fc44c5a50ee0f0",
    thumbnails: "https://i.ytimg.com/vi/hU4kULhOdNE/mqdefault.jpg",
    description: "개발",
    createdAt: "2022-08-30T07:02:22.737+00:32",
  },
  {
    "_id :": "6312c7b4d3084a7cb866bb8f",
    videoId: "C8t7eHIQ9fU",
    videoTitle: "개발자로 성공할 수 있는 딱 하나의 기술 😆",
    channelId: "UC_4u-bXaba7yrRz_6x6kb_w",
    category_id: "6312c45c65fc44c5a50ee0f0",
    thumbnails: "https://i.ytimg.com/vi/C8t7eHIQ9fU/mqdefault.jpg",
    description:
      "개발자를 통해 내가 원하는 삶을 살아가기 위한 딱하나의 기술! 저를 흙수저에서 내가 원하던 그 이상의 삶을 가질 수 있도록 만들어준 하나의 스킬을 공유합니다 (↙ 자세한 내용)\\n___________________________\\n\\n💡 풀스택 개발 로드맵 ⇢ https://academy.dream-coding.com/pages/912e50\\n\\n🚀 엘리와 더 체계적으로 배우고 싶다면 ⇢ 드림코딩 아카데미:\\nhttp://academy.dream-coding.com/\\n\\n.....................................................\\n\\n🔥 유튜브 영상을 정리해서 블로그에 올리시는 경우 꼭 출처 및 영상 링크를 남겨 주세요.\\n\\n✨ 관련된 영상들 \\n개발자 망하게 하는 사고방식 😱 (가면증후군",
    createdAt: "2022-08-30T07:02:22.737+00:33",
  },
  {
    "_id :": "6312c7b4d3084a7cb866bb90",
    videoId: "n61ULEU7CO0",
    videoTitle: "Best of lofi hip hop 2021 ✨ - beats to relax/study to",
    channelId: "UCSJ4gkVC6NrvII8umztf0Ow",
    category_id: "6312c45c65fc44c5a50ee0e0",
    thumbnails: "https://i.ytimg.com/vi/n61ULEU7CO0/mqdefault.jpg",
    description:
      "The new Lofi Girl compilation “Best of 2021” is out now 🙌\\nThis compilation contains a track cherry-picked from every release on the channel this year",
    createdAt: "2022-08-30T07:02:22.737+00:35",
  },
  {
    "_id :": "6312c7b4d3084a7cb866bb91",
    videoId: "cMHXFKAN6Dk",
    videoTitle:
      "공부하고 일할 때 꼭 필요한 음악 | 3 hour lofi hip hop mix / lofi study / work / chill beats",
    channelId: "UCkwegMjATseS7obo5GW_YsQ",
    category_id: "6312c45c65fc44c5a50ee0e0",
    thumbnails: "https://i.ytimg.com/vi/cMHXFKAN6Dk/mqdefault.jpg",
    description: "💕If you like the video",
    createdAt: "2022-08-30T07:02:22.737+00:36",
  },
  {
    "_id :": "6312c7b4d3084a7cb866bb92",
    videoId: "vYLyyuQByBc",
    videoTitle:
      "음악을 통해 쉽게 공부할 수 있습니다 | 3 hour lofi hip hop mix / lofi study / work / chill beats",
    channelId: "UCkwegMjATseS7obo5GW_YsQ",
    category_id: "6312c45c65fc44c5a50ee0e0",
    thumbnails: "https://i.ytimg.com/vi/vYLyyuQByBc/mqdefault.jpg",
    description: "💕If you like the video",
    createdAt: "2022-08-30T07:02:22.737+00:37",
  },
  {
    "_id :": "6312c7b4d3084a7cb866bb93",
    videoId: "CowLAnmhxMY",
    videoTitle:
      "React 기초 5강 : state 맘대로 변경하는 법 (setState는 넘 옛날이고염)",
    channelId: "UCSLrpBAzr-ROVGHQ5EmxnUg",
    category_id: "6312c45c65fc44c5a50ee0f0",
    thumbnails: "https://i.ytimg.com/vi/CowLAnmhxMY/mqdefault.jpg",
    description:
      "0. 일단 상단에 useState가 잘 import 되어있는지 확인하시고\\n1. useState만들 때 함께 만들어놨던 따봉변경() 글제목변경() 이런 함수를 쓰시면 됩니다.\\n2. 근데 array 자료라면 그냥 대충 등호 이런걸로 변경하면 안되고 사본을 만들어서 그걸 변경하셔야합니다.\\n3. 사본 만드는 법은 let newArray = [...기존state이름] 이렇게 만드신 다음 newArray를 수정해서 글제목변경(newArray) 이렇게 하셔야 제대로 state 변경이 가능합니다.\\n4. 이걸 글로 설명하면 어려우니 영상제작한것임 영상보셈 \\n\\n풀강의",
    createdAt: "2022-08-30T07:02:22.737+00:38",
  },
  {
    "_id :": "6312c7b4d3084a7cb866bb94",
    videoId: "cOUhREAWJNw",
    videoTitle: "코드 따라쳐서 웹서비스 하나 만들었는데 배포는 어떻게함? (AWS)",
    channelId: "UCSLrpBAzr-ROVGHQ5EmxnUg",
    category_id: "6312c45c65fc44c5a50ee0f0",
    thumbnails: "https://i.ytimg.com/vi/cOUhREAWJNw/mqdefault.jpg",
    description:
      "Google Cloud의 App Engine 이런 것도 유사한 서비스입니다\\n거긴 30만원 크레딧으로 줌 \\n\\n\\n\\n쉬운거 알려주는 https://codingapple.com\\n구독자용 10% 할인 코드 : YT123 (맨날바뀜 최신영상 참고)",
    createdAt: "2022-08-30T07:02:22.737+00:39",
  },
  {
    "_id :": "6312c7b4d3084a7cb866bb95",
    videoId: "6SvUZqbU37E",
    videoTitle: "[10분 테코톡] 🐳스티치의 빌드와 배포",
    channelId: "UC-mOekGSesms0agFntnQang",
    category_id: "6312c45c65fc44c5a50ee0f0",
    thumbnails: "https://i.ytimg.com/vi/6SvUZqbU37E/mqdefault.jpg",
    description:
      "🙋\\\\u200d♀️ 우아한테크코스의 크루들이 진행하는 10분 테크토크입니다. 🙋\\\\u200d♂️\\n\\n'10분 테코톡'이란  우아한테크코스 과정을 진행하며 크루(수강생)들이 동료들과 학습한 내용을 공유하고 이야기하는 시간입니다. 서로가 성장하기 위해 지식을 나누고 대화하며 생각해보는 시간으로 자기 주도적인 성장을 지향하는 우아한테크코스의 문화 중 하나입니다.\\n\\n🌕우아한테크코스란 🌕\\n\\n우아한테크코스는 일반 사용자용 서비스를 개발하는 회사가 필요로 하는 역량을 가진 프로그래머를 양성하기 위한 교육입니다. 우리의 목표는 자기 주도적으로 학습하고 성장하고 싶은 개발자를 위한 교육을 만드는 것입니다.",
    createdAt: "2022-08-30T07:02:22.737+00:40",
  },
  {
    "_id :": "6312c7b4d3084a7cb866bb96",
    videoId: "jaxcCwpzQgg",
    videoTitle: "파이팅스피릿 | 동기부여 영상",
    channelId: "UCrZvFIT3AC-fj7aHm3M2m_Q",
    category_id: "6312c45c65fc44c5a50ee0e4",
    thumbnails: "https://i.ytimg.com/vi/jaxcCwpzQgg/mqdefault.jpg",
    description:
      "극단적으로 어려우면 콧구멍에 손을 넣어보세요\\n그래서 손을 넣어보고\\n숨이 들어가고 나가고 있고\\n'아 답답하다'\\n숨이 들어가고 나가고 잇으면\\n기회는 온다는 뜻입니다.\\n\\n\\n🎤 Speaker : \\n* 전한길\\n메가공무원 https://www.megagong.net/teacher/home... \\n네이버카페 https://cafe.naver.com/hangilhistory\\n\\n#공부자극 #쓴소리 #동기부여\\n\\n👉 Credit\\n------\\nWhitesand - All The Way\\n- Youtube : https://goo.gl/au5GJK\\n- Buy My Music : https://whitesand.bandcamp.com/\\n- Spotify : https://open.spotify.com/artist/3GXun...\\n------\\n\\n👉 About the channel:\\n멘탈훈련소는 강한 동기부여와 자기 통제를 위한 유튜브 채널입니다.\\n\\n국내 최고의 동기부여 연사를 모았습니다. \\n\\n저는 이러한 동기 부여 콘텐츠에 대한 권리를 소유하지 않습니다. \\n공정 사용에 따라 다른 사람을 교육하고 영감을 주기위한 목적으로 용도변경 및 재해석 했습니다. \\n\\n'공정 사용'은 해석의 여지가 있으므로 사용 된 콘텐츠의 소유자가 동영상 삭제를 원하는 경우 저에게 이메일을 보내 주시면 즉시 동영상을 삭제하겠습니다. \\n\\n문의 사항이나 우려 사항이 있으면 detailclasstv@gmail.com으로 이메일을 보내주십시오",
    createdAt: "2022-08-30T07:02:22.737+00:41",
  },
  {
    "_id :": "6312c7b4d3084a7cb866bb97",
    videoId: "ps8M1t_Q4nY",
    videoTitle: "해내는 거야 - LEGEND WEEK 정승제 동기부여 영상",
    channelId: "UCbZ2GqJXadQfNBafgSBpPpw",
    category_id: "6312c45c65fc44c5a50ee0e4",
    thumbnails: "https://i.ytimg.com/vi/ps8M1t_Q4nY/mqdefault.jpg",
    description:
      "#정승제 #동기부여 #마인드셋\\nSpoken by:\\n정승제1\\n정승제2\\n정승제3\\n정승제4\\n\\n- 2021.11월 정승제 리마스터 영상 -\\n\\n이 진심 앞에 무슨 말이 더 필요한가!\\nMK 에듀테인먼트(대표)",
    createdAt: "2022-08-30T07:02:22.737+00:42",
  },
  {
    "_id :": "6312c7b4d3084a7cb866bb98",
    videoId: "dYOzPEhzQ00",
    videoTitle: "나의 독기를 1000% 이끌어 내줄 영상ㅣ 최고의 동기부여- 유수연",
    channelId: "UC_oV9bHBSEu17KMcK-9S0bg",
    category_id: "6312c45c65fc44c5a50ee0e4",
    thumbnails: "https://i.ytimg.com/vi/dYOzPEhzQ00/mqdefault.jpg",
    description:
      "연사: 유수연\\n[유수연의 핵사이다 채널]  ⬇️⬇️⬇️Click ⬇️⬇️⬇️\\nhttps://www.youtube.com/channel/UCGYP4T8mIypCoxcCUqMfeOQ\\n\\n학생: 한국00공사",
    createdAt: "2022-08-30T07:02:22.737+00:43",
  },
  {
    "_id :": "6312c7b4d3084a7cb866bb99",
    videoId: "xqdBj5AdmbA",
    videoTitle: "호랑이 굴에 들어온 기린",
    channelId: "UCoe-0EVDJnjlSoPK8ygcGwQ",
    category_id: "6312c45c65fc44c5a50ee0dd",
    thumbnails: "https://i.ytimg.com/vi/xqdBj5AdmbA/mqdefault.jpg",
    description:
      "드디어 그 녀석(?)이 왔습니다 ㅎ\\n한 없는 저의 배려로 아주 편하고 즐겁게 촬영하고 갔습니다.\\n저도 오랜만에 나누는 끝없는 노가리에 시간 가는 줄 몰랐습니다.\\n\\n광수 새로운 드라마 ‘살인자의 쇼핑목록’ 도 많이 사랑해 주세요! \\n재미를 위해서 서로 짓궂은 장난이나 토크는 .. 아시죠? ㅎ \\n그냥 웃으면서 봐주세요~! \\n모든 분들 즐겁고 행복한 저녁 보내시길 바랍니다!\\n\\n'살인자의 쇼핑목록' tvn 4/27일 pm 10:30분 첫방\\n\\n#김종국 #짐종국 #이광수",
    createdAt: "2022-08-30T07:02:22.737+00:44",
  },
  {
    "_id :": "6312c7b4d3084a7cb866bb9a",
    videoId: "ntw4IOjYInQ",
    videoTitle: "헬스장이야? 박물관이야..?",
    channelId: "UCoe-0EVDJnjlSoPK8ygcGwQ",
    category_id: "6312c45c65fc44c5a50ee0de",
    thumbnails: "https://i.ytimg.com/vi/ntw4IOjYInQ/mqdefault.jpg",
    description:
      "LA를 그렇게 다니면서 매번 큰 프랜차이즈 Gym만 다니다가 \\n그냥 동네 체육관은 없나 싶어 찾았더니.. \\n보물 같은 곳을 발견했습니다 ㅎ\\n\\n베버리힐즈 한복판에 이렇게나 감성 돋는 체육관이..\\n심지어 너무 친절하시고.. \\n여행 왔다고 하니 무료로 운동도 맘껏 하라고 하시고.. 감동..\\n\\n그리고 너무나도 반가웠던 우리 미모의 사촌누나 와 가족들과의 만남 \\n행복했던 LA에서의 힐링과 마지막 열정적인 콘서트 현장까지.. \\n공연에 함께해 주셨던 많은 분들께 다시 한번 감사드립니다! \\n모두들 건강하세요!\\n\\n#김종국 #짐종국 #LA",
    createdAt: "2022-08-30T07:02:22.737+00:45",
  },
  {
    "_id :": "6312c7b4d3084a7cb866bb9b",
    videoId: "ycnsfRKMPX4",
    videoTitle: '\\"너는 끈기를 가져야해',
    channelId: "UCY3jpJxcRPZtiR5gEthdO2g",
    category_id: "6312c45c65fc44c5a50ee0de",
    thumbnails: "https://i.ytimg.com/vi/ycnsfRKMPX4/mqdefault.jpg",
    description: "넌 할 수 있어\\ (Feat.김계란) 운동노래 쇠힙[Playlist]",
    createdAt: "2022-08-30T07:02:22.737+00:46",
  },
  {
    "_id :": "6312c7b4d3084a7cb866bb9c",
    videoId: "JmfxGFdMVYE",
    videoTitle:
      "토할 것 같아…” 소유기 최초 소유의 운동 포기 선언?! | 소유를 무너뜨린 매운맛 다이어트 유산소 운동 F45🔥",
    channelId: "UCs29NQY8SdvtjhxYxvy3Grg",
    category_id: "6312c45c65fc44c5a50ee0de",
    thumbnails: "https://i.ytimg.com/vi/JmfxGFdMVYE/mqdefault.jpg",
    description:
      "오늘도 어김없이 유산소를 뿌시고 왔습니다!\\n나만 당할 순 없지! 소유기 PD님들까지 데리고 한 고강도 인터벌 트레이닝 F45..!\\n과연 세 사람은 무사히 운동을 끝낼 수 있을 것인가..?!\\n지금 바로 시작합니다~! 🤗",
    createdAt: "2022-08-30T07:02:22.737+00:47",
  },
  {
    "_id :": "6312c7b4d3084a7cb866bb9d",
    videoId: "e_e1WMNFiHc",
    videoTitle:
      "Listening to Lofi's music on the stress day of overstudying really give me a peaceful mind",
    channelId: "UCc3lzVrSfO5iGNjhs-yRF2g",
    category_id: "6312c45c65fc44c5a50ee0e0",
    thumbnails: "https://i.ytimg.com/vi/e_e1WMNFiHc/mqdefault.jpg",
    description:
      "Listening to Lofi's music on the stress day of overstudying really give me a peaceful mind",
    createdAt: "2022-08-30T07:02:22.737+00:48",
  },
  {
    "_id :": "6312c7b4d3084a7cb866bb9e",
    videoId: "ejtEzKPIt3k",
    videoTitle:
      "3억 뷰의 전설  신병 드라마 한방에 몰아보기 결말포함 주말이 순삭 됩니다",
    channelId: "UCm3-2izMNQjXWxCUOyWBGxg",
    category_id: "6312c45c65fc44c5a50ee0dd",
    thumbnails: "https://i.ytimg.com/vi/ejtEzKPIt3k/mqdefault.jpg",
    description:
      "#신병 #한국드라마 #다시보기 \\n구독하기 - https://bit.ly/3thC1kE",
    createdAt: "2022-08-30T07:02:22.737+00:49",
  },
  {
    "_id :": "6312c7b4d3084a7cb866bb9f",
    videoId: "9z4ZR68bcAQ",
    videoTitle: "역대 마블시리즈.. 어벤져스 G렸던 순간들《1부》",
    channelId: "UCaHGOzOyeYzLQeKsVkfLEGA",
    category_id: "6312c45c65fc44c5a50ee0dd",
    thumbnails: "https://i.ytimg.com/vi/9z4ZR68bcAQ/mqdefault.jpg",
    description:
      "#마블 #어벤져스 #지무비\\nG리는 시리즈 #2\\n역대 마블 G렸던 순간들 《1부》\\nSKT 브로드밴드로부터 제작비를 지원받아 만든 영상입니다. 감사합니다.\\n\\n[지무비 채널 멤버십 가입]\\nhttps://goo.gl/LrQJgy\\n[지무비 구독] \\nhttps://goo.gl/4ETvXY\\n[지무비 공식 인스타그램] \\nhttps://www.instagram.com/G_movie__/\\n[지무비 개인 인스타그램] \\nhttps://www.instagram.com/awayout1/\\n[타노스 맞은 횟수 보러가기] \\nhttps://www.youtube.com/watch?v=b4k_U7C-GDA&t\\n[타노스 때린 횟수 보러가기] \\nhttps://www.youtube.com/watch?v=SG5YSINTRAA&t\\n[캡틴아메리카의 100m 기록 보러가기]\\nhttps://www.youtube.com/watch?v=q9ANkxwRZk8\\n[지무비 후원] \\nhttps://toon.at/donate/636671533566619411\\n[지무비 페이스북] \\nhttps://www.facebook.com/pg/Gmoviee\\n[이메일] \\nawayout2@naver.com",
    createdAt: "2022-08-30T07:02:22.737+00:50",
  },
  {
    "_id :": "6312c7b4d3084a7cb866bba0",
    videoId: "p9HjZshdjt4",
    videoTitle:
      "도입부 부터 좋은 출근준비 팝송✨활기찬 뉴욕 아침의 분위기🌞Design making tutorial | 노동요",
    channelId: "UCdp8WGk7l78AIGooOvO35IQ",
    category_id: "6312c45c65fc44c5a50ee0e0",
    thumbnails: "https://i.ytimg.com/vi/p9HjZshdjt4/mqdefault.jpg",
    description: "신나는 팝송",
    createdAt: "2022-08-30T07:02:22.737+00:52",
  },
  {
    "_id :": "6312c7b4d3084a7cb866bba1",
    videoId: "iAVFk3Hv5K0",
    videoTitle:
      "[Playlist] 떼창 안하고는 못 참을걸? 🤟ㅣ 친구와 페스티벌에서 부르고 싶은 락ㅣfestival sing along music 🤟",
    channelId: "UCSGC87iX0QhnIfUOI_B_Rdg",
    category_id: "6312c45c65fc44c5a50ee0e0",
    thumbnails: "https://i.ytimg.com/vi/iAVFk3Hv5K0/mqdefault.jpg",
    description:
      "코카-콜라 x essential; 스페셜 플레이리스트 (9/9)\\n\\n* 본 컨텐츠는 벅스와 코카-콜라가 함께 제작하였습니다🥤\\n\\n불타는 여름 🌞\\n친구들과 함께 👬\\n짜릿하게 즐겨보세요!\\n\\nPlaylist by 벅스PD (벅스 뮤직PD)\\n\\n*벅스에서 플레이리스트를 확인해보세요!\\n:: http://bugs.kr/!ytccpro9\\n\\n*벅스PD님의 감성이 내 취향이라면!\\n:: http://bugs.kr/!ytccpro9pd\\n\\nmusic to make your day.\\n\\n#음악처럼짜릿한마법 #코카콜라 #essential #코크앤뮤직 #페스티벌 #떼창 #밴드 #음악 #플레이리스트 #팝송",
    createdAt: "2022-08-30T07:02:22.737+00:53",
  },
  {
    "_id :": "6312c7b4d3084a7cb866bba2",
    videoId: "37Mmd4rUwGk",
    videoTitle:
      "[Playlist] 돗자리 펴고 뒹굴거리기 🌻ㅣ나도 모르게 두둠칫 하는 기분전환 데일리 팝ㅣsunny afternoon daily pop 🌻",
    channelId: "UCSGC87iX0QhnIfUOI_B_Rdg",
    category_id: "6312c45c65fc44c5a50ee0e0",
    thumbnails: "https://i.ytimg.com/vi/37Mmd4rUwGk/mqdefault.jpg",
    description:
      "Playlist by 블루라빈 (벅스 뮤직PD)\\n\\n*벅스에서 플레이리스트를 확인해보세요!\\n:: http://bugs.kr/!yt52780\\n\\n*블루라빈님의 감성이 내 취향이라면!\\n:: http://bugs.kr/!yt52780pd\\n\\nmusic to make your day.\\n\\n#드라이브 #화창한날 #기분전환 #음악 #플레이리스트 #팝송",
    createdAt: "2022-08-30T07:02:22.737+00:54",
  },
  {
    "_id :": "6312c7b4d3084a7cb866bba3",
    videoId: "cGhGtKnKZbY",
    videoTitle: "[Playlist] 세련된 카페 안",
    channelId: "UCSGC87iX0QhnIfUOI_B_Rdg",
    category_id: "6312c45c65fc44c5a50ee0e0",
    thumbnails: "https://i.ytimg.com/vi/cGhGtKnKZbY/mqdefault.jpg",
    description: "나 그리고 커피 & 음악 ☕🍮ㅣCoffee & Music",
    createdAt: "2022-08-30T07:02:22.737+00:55",
  },
];

module.exports = { users, collections, comments, categories, videos };
