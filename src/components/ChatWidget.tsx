"use client";

import { useChat } from "ai/react";
import { useEffect, useRef, useState } from "react";
import styles from "./ChatWidget.module.scss";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const STORAGE_KEY = "swayam_chat_session";

  const { messages, input, handleInputChange, handleSubmit, isLoading, setMessages } =
    useChat({ api: "/api/chat" });

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setMessages(JSON.parse(saved));
    } catch {}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <>
      {open && (
        <div className={styles.panel}>
          <div className={styles.header}>
            <div className={styles.headerTitle}>
              <span className={styles.headerName}>Chat with Swayam</span>
              <span className={styles.headerSub}>AI clone · usually instant</span>
            </div>
            <button
              className={styles.closeBtn}
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <CloseIcon />
            </button>
          </div>

          <div className={styles.messages}>
            {messages.length === 0 && (
              <p className={styles.empty}>
                Hey! Ask me about my projects, what I&apos;m learning, or
                anything else.
              </p>
            )}
            {messages.map((m) => (
              <div
                key={m.id}
                className={`${styles.bubble} ${
                  m.role === "user" ? styles.user : styles.assistant
                }`}
              >
                {m.content}
              </div>
            ))}
            {isLoading && (
              <div className={`${styles.bubble} ${styles.assistant}`}>
                <span className={styles.dots}>
                  <span />
                  <span />
                  <span />
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="Ask me something…"
              className={styles.input}
              disabled={isLoading}
              autoComplete="off"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className={styles.sendBtn}
              aria-label="Send"
            >
              <SendIcon />
            </button>
          </form>
        </div>
      )}

      <button
        className={`${styles.launcher} ${open ? styles.hidden : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? <CloseIcon /> : <ChatIcon />}
      </button>
    </>
  );
}

function ChatIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  );
}
