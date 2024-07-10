import React from "react";

const SkillStack = () => {
  return (
    <ul className="font-thin pt-2">
      {/* next.js */}
      <li className="indent-8">
        <span className="font-bold">Next.js (App Router)：</span>
        使用
        <span className="font-bold">TypeScript</span>
        進行類型檢查，提升代碼品質。
      </li>

      {/* frontend design */}
      <li className="indent-8">
        前端設計：使用
        <span className="font-bold">TailwindCSS</span>
        進行樣式設計，並使用
        <span className="font-bold">shadcn</span>和
        <span className="font-bold">framer-motion</span>
        實現動畫效果。
      </li>

      {/* data flow */}
      <li className="indent-8">
        資料流管理：使用
        <span className="font-bold">Redux</span>
        處理前端資料流。
      </li>

      {/* data store */}
      <li className="indent-8">
        資料儲存：使用
        <span className="font-bold">MongoDB</span>
        儲存老師、發證者以及區塊鏈資料的管理
      </li>

      {/* verify user */}
      <li className="indent-8">
        整合MetaMask進行用戶登入和權限控制，確保系統安全性。
      </li>

      {/* smart contract */}
      <li className="indent-8">
        智能合約：使用
        <span className="font-bold">Hardhat</span>
        撰寫
        <span className="font-bold">Solidity</span>
        智能合約及合約測試、部署與驗證。
      </li>
      {/* ERC-1155*/}
      <li className="indent-8">
        <span className="font-bold">NFT</span>
        技術：使用
        <span className="font-bold">ERC-1155</span>
        實現靈魂綁定(Soulbound)證書，確保證書無法轉移。
      </li>
    </ul>
  );
};

export default SkillStack;
// desc: [
//     "。Next.js (App Router)：使用 TypeScript 進行類型檢查，提升代碼品質。",
//     "。前端設計：使用TailwindCSS進行樣式設計，並使用shadcn和framer-motion實現動畫效果。",
//     "。資料流管理：使用Redux處理前端資料流。",
//     "。資料儲存：使用MongoDB儲存老師及發證者的相關資料。",
//     "。用戶認證：整合MetaMask進行用戶登入和權限控制，確保系統安全性。",
//     "。智能合約：使用Hardhat撰寫Solidity智能合約及進行合約測試、驗證與部署。",
//     "。NFT技術：使用ERC-1155實現靈魂綁定(Soulbound)證書，確保證書無法轉移。",
//   ],
