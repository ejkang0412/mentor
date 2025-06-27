import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

// 배경 그라데이션, 폰트 등 전체 스타일 적용
const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(135deg, #f8cdda 0%, #1d2b64 100%);
    min-height: 100vh;
    font-family: 'Nanum Pen Script', cursive, sans-serif;
    margin: 0;
    color: #222;
  }
`;

const Header = styled.header`
  padding: 2rem 0 1.5rem 0;
  text-align: center;
  color: #fff;
  text-shadow: 2px 2px 8px #b983ff;
  font-size: 2.8rem;
  font-weight: bold;
  letter-spacing: 2px;
`;

const StyledPaper = styled.div`
  max-width: 680px;
  margin: 0 auto;
  background: rgba(255,255,255,0.85);
  border-radius: 32px;
  box-shadow: 0 8px 40px 0 rgba(80,40,220,0.1);
  padding: 2.5rem 2rem 2rem 2rem;
  margin-bottom: 2rem;
`;

const NoteList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-bottom: 2rem;
  justify-content: center;
`;

const NoteCard = styled(motion.div)`
  background: linear-gradient(120deg, #ffe3e3, #e0c3fc 85%);
  border-radius: 16px;
  box-shadow: 0 2px 16px 0 rgba(80,40,220,0.09);
  padding: 1.2rem 1.2rem 0.6rem 1.2rem;
  min-width: 220px;
  max-width: 280px;
  min-height: 100px;
  font-size: 1.2rem;
  position: relative;
  overflow: visible;
  word-break: keep-all;
  animation: float 2s ease-in-out infinite alternate;
  border: 2px dashed #b983ff;
`;

const NoteFrom = styled.div`
  text-align: right;
  font-size: 1rem;
  opacity: 0.7;
  margin-top: 0.8rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  margin-bottom: 0.7rem;
`;

const Input = styled.input`
  border: none;
  border-radius: 8px;
  padding: 0.7rem 1rem;
  font-size: 1.1rem;
  background: #f2f2f2;
`;

const Textarea = styled.textarea`
  border: none;
  border-radius: 8px;
  padding: 0.7rem 1rem;
  font-size: 1.1rem;
  resize: none;
  background: #f2f2f2;
  min-height: 70px;
`;

const Button = styled.button`
  background: linear-gradient(90deg, #a18cd1 0%, #fbc2eb 100%);
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
  padding: 0.7rem 1rem;
  box-shadow: 0 2px 8px 0 #b983ff44;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
  margin-top: 0.3rem;
  &:hover {
    background: linear-gradient(90deg, #fbc2eb 0%, #a18cd1 100%);
    transform: scale(1.04);
  }
`;

const Footer = styled.footer`
  color: #fff;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1rem;
  opacity: 0.9;
`;

function App() {
  const [notes, setNotes] = useState([
    {
      content: "바쁜 시간에도 귀한 말씀 감사했습니다. 멘토님의 조언 꼭 기억하겠습니다!",
      from: "학회 회원 1"
    },
    {
      content: "정말 감동적인 시간이었어요. 회사 방문 잊지 못할 거예요!",
      from: "학회 회원 2"
    }
  ]);
  const [form, setForm] = useState({ content: "", from: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.content.trim() && form.from.trim()) {
      setNotes([
        ...notes,
        { content: form.content, from: form.from }
      ]);
      setForm({ content: "", from: "" });
    }
  };

  return (
    <>
      <GlobalStyle />
      <Header>💌 Mentor Rolling Paper 💐</Header>
      <StyledPaper>
        <NoteList>
          {notes.map((note, idx) => (
            <NoteCard
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.13 }}
              whileHover={{ scale: 1.04, rotate: -2 + Math.random() * 4 }}
            >
              {note.content}
              <NoteFrom>– {note.from}</NoteFrom>
            </NoteCard>
          ))}
        </NoteList>
        <Form onSubmit={handleSubmit}>
          <Textarea
            placeholder="멘토님께 남길 말을 적어주세요."
            value={form.content}
            onChange={e => setForm({ ...form, content: e.target.value })}
            maxLength={200}
            required
          />
          <Input
            placeholder="이름 또는 별명"
            value={form.from}
            onChange={e => setForm({ ...form, from: e.target.value })}
            maxLength={16}
            required
          />
          <Button type="submit">방명록 남기기</Button>
        </Form>
      </StyledPaper>
      <Footer>❤️ 멘토님께, 학회 회원들의 진심을 전합니다. <br/> Powered by GitHub Pages</Footer>
    </>
  );
}

export default App;
