import { useEffect, useState } from "react";
import API from "./api";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const { data } = await API.get("/tasks");
      setTasks(data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async () => {
    if (!title.trim()) return;

    try {
      await API.post("/tasks", { title });
      setTitle("");
      fetchTasks();
    } catch (err) {
      console.error("Error adding task:", err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  const toggleTask = async (task) => {
    try {
      await API.put(`/tasks/${task._id}`, {
        completed: !task.completed,
      });
      fetchTasks();
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "#121212",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        DevOps MERN Todo
      </h1>

      {/* Input Section */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task..."
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #333",
            backgroundColor: "#1e1e1e",
            color: "#fff",
            outline: "none",
          }}
        />

        <button
          onClick={addTask}
          style={{
            padding: "10px 16px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#4caf50",
            color: "white",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>

      {/* Task List */}
      {loading ? (
        <p style={{ textAlign: "center" }}>Loading...</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.length === 0 ? (
            <p style={{ textAlign: "center", color: "#888" }}>
              No tasks yet
            </p>
          ) : (
            tasks.map((task) => (
              <li
                key={task._id}
                style={{
                  backgroundColor: "#1e1e1e",
                  padding: "12px",
                  marginBottom: "10px",
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  onClick={() => toggleTask(task)}
                  style={{
                    textDecoration: task.completed
                      ? "line-through"
                      : "none",
                    cursor: "pointer",
                    color: task.completed ? "#888" : "#fff",
                  }}
                >
                  {task.title}
                </span>

                <button
                  onClick={() => deleteTask(task._id)}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#ff4d4d",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
                  ❌
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}

export default App;