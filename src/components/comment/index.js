import React, { useState } from "react";

const Comment = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  };

  return (
    <div>
      <h2>Comentários</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="comment">Escreva um comentário:</label>
          <textarea
            className="form-control"
            id="comment"
            rows="3"
            value={newComment}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comment;

  
