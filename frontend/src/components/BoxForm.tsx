import React, { useState } from "react";
import { Input, Button, Form } from "antd";
import axios from "axios";

interface BoxFormProps {
  onCalculate: (vertices: number[]) => void;
}

const BoxForm: React.FC<BoxFormProps> = ({ onCalculate }) => {
  const [dimensions, setDimensions] = useState({ width: 100, height: 100, length: 100 });

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/box", dimensions);
      onCalculate(response.data.vertices);
    } catch (error) {
      console.error("Error calculating vertices:", error);
    }
  };

  return (
    <Form layout="vertical" style={{ padding: "20px", maxWidth: "300px", background: "#f0f0f0" }}>
      <Form.Item label="Width">
        <Input
          type="number"
          value={dimensions.width}
          onChange={(e) => setDimensions({ ...dimensions, width: +e.target.value })}
        />
      </Form.Item>
      <Form.Item label="Height">
        <Input
          type="number"
          value={dimensions.height}
          onChange={(e) => setDimensions({ ...dimensions, height: +e.target.value })}
        />
      </Form.Item>
      <Form.Item label="Length">
        <Input
          type="number"
          value={dimensions.length}
          onChange={(e) => setDimensions({ ...dimensions, length: +e.target.value })}
        />
      </Form.Item>
      <Button type="primary" onClick={handleSubmit}>
        Calculate
      </Button>
    </Form>
  );
};

export default BoxForm;
