import React, { useState } from "react";
import members from "./members";

function App() {
  const [selected, setSelected] = useState(null); // 모달로 편지 볼 때 사용

  return (
    <div style={{ minHeight: "100vh", background: "#f7f7f7", padding: "2rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>학회원 롤링페이퍼</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "28px",
          maxWidth: "460px",
          margin: "0 auto"
        }}
      >
        {members.map((member) => (
          <div
            key={member.name}
            onClick={() => setSelected(member)}
            style={{
              background: "#fff",
              borderRadius: "22px",
              boxShadow: "0 4px 18px rgba(0,0,0,0.10)",
              padding: "20px 12px",
              cursor: "pointer",
              textAlign: "center"
            }}
          >
            <img
              src={member.image}
              alt={member.name}
              style={{
                width: "85px",
                height: "85px",
                objectFit: "cover",
                borderRadius: "50%",
                marginBottom: "14px",
                border: "2.5px solid #dee1e4"
              }}
            />
            <div style={{ fontWeight: 600, fontSize: "1.1rem" }}>{member.name}</div>
          </div>
        ))}
      </div>

      {/* 편지 모달 */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.13)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: "#fff",
              borderRadius: "30px",
              padding: "34px 18px",
              maxWidth: "350px",
              width: "90vw",
              boxShadow: "0 7px 25px rgba(0,0,0,0.18)"
            }}
          >
            <h2 style={{ marginBottom: "1.1rem" }}>{selected.name}의 편지</h2>
            <pre style={{
              whiteSpace: "pre-line",
              fontFamily: "inherit",
              fontSize: "1rem",
              lineHeight: 1.7,
              marginBottom: "1.2rem"
            }}>
              {selected.letter}
            </pre>
            <button
              onClick={() => setSelected(null)}
              style={{
                padding: "8px 18px",
                borderRadius: "12px",
                border: "none",
                background: "#e6e6e6",
                cursor: "pointer"
              }}
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
