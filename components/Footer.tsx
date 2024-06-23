import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <footer>
      <Container>
        <Typography variant="body2" color="textSecondary" align="center">
          © 2024 勤怠管理システム
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
