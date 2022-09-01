const express = require("express");
const router = express.Router();

const CollectionsService = require("../b_services/collections.service");
const collectionsService = new CollectionsService();

router.post("/", collectionsService.createCollection); // 컬렉션 생성
router.get("/mine", collectionsService.getAllCollectionsByUserId); // 내가 모은 컬렉션 목록 조회
router.get("/", collectionsService.getAllCollectionsByCategoryId); // 카테고리에 포함된 컬렉션 목록 조회
router.get("/:collection_id", collectionsService.getCollection); // 컬렉션 상세 조회
router.delete("/:collection_id", collectionsService.deleteCollection); // 컬렉션 삭제
router.put("/like", collectionsService.likeCollection); // 컬렉션 좋아요 또는 좋아요 취소
router.get("/", collectionsService.getCollectionsBySearch); // 검색어에 맞는 컬렉션 리스트(미완)
router.put("/:collection_id", collectionsService.addVideoOnCollection); // 컬렉션에 영상 추가(미완)

module.exports = router;
