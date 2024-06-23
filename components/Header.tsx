import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          勤怠管理システム
        </Typography>
        <Link href="/" passHref>
          <Button color="inherit">
            ホーム
          </Button>
        </Link>
        <Link href="/login" passHref>
          <Button color="inherit">
            ログイン
          </Button>
        </Link>
        <Link href="/attendance" passHref>
          <Button color="inherit">
            勤怠管理
          </Button>
        </Link>
        <Link href="/master" passHref>
          <Button color="inherit">
            管理者用ページ
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
