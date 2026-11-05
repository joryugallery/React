import React from "react";
import "./AttandenceCardBook.css";

const students = [
    { id: 1, name: "김태경", grade: 1, major: "컴공" },
    { id: 2, name: "이수안", grade: 1, major: "경영학과" },
    { id: 3, name: "전주형", grade: 0, major: "없음" },
    { id: 4, name: "정세현", grade: 1, major: "유도" },
];

function AttendanceCardBook() {
    return (
        <div className="book">
            <h2 className="book-title">📒 학생출석부</h2>
            <div className="card-list">
                {students.map((student) => (
                    <div className="card" key={student.id}>
                        <img
                            className="card-img"
                            src={`https://i.pravatar.cc/150?img=${student.id + 10}`}
                            alt={student.name}
                        />
                        <div className="card-info">
                            <h3 className="card-name">{student.name}</h3>
                            <p className="card-grade">
                                {student.grade === 0 ? "신입" : `${student.grade}학년`}
                            </p>
                            <span className="card-major">{student.major}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AttendanceCardBook;