import React from 'react';
import { Layout, Image, Form, Button } from 'antd';
import ensta from './image/ensta.png';
import style from './style';
import storyForm from './components/storyForm'; // Correct the component name
import { BrowserRouter as Router, Link, Route, Routes, useHistory } from 'react-router-dom'; // Import useHistory

const App = () => {
  const history = useHistory(); // Initialize useHistory

  const handleSignInClick = () => {
    // Navigate to the "storyForm" page when "Sign In" is clicked
    history.push('/storyForm');
  };

  return (
    <Router>
      <Layout style={style.layout}>
        <Form.Item wrapperCol={{ span: 4, offset: 20 }}>
          <Button type="primary" block htmlType="submit">
            Log In
          </Button>
          <Button type="primary" block htmlType="button" onClick={handleSignInClick}>
            Sign In
          </Button>
        </Form.Item>

        <Image style={style.image} src={ensta} /> {/* Use src instead of preview */}
      </Layout>

      <Routes>
        
        <Route path="/storyForm" element={<storyForm />} /> {/* Add route for storyForm */}
      </Routes>
    </Router>
  );
};

export default App;
