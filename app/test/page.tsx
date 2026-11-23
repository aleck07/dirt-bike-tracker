'use client';
// Component test page: visit /test to check the theme against the design.
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import LinearProgress from '@mui/material/LinearProgress';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import BuildOutlined from '@mui/icons-material/BuildOutlined';
import BarChartOutlined from '@mui/icons-material/BarChartOutlined';
import CalendarTodayOutlined from '@mui/icons-material/CalendarTodayOutlined';

const DRAWER_WIDTH = 240;
const nav = [
  { label: 'Garage', icon: <HomeOutlined /> },
  { label: 'Maintenance', icon: <BuildOutlined /> },
  { label: 'Part life', icon: <BarChartOutlined /> },
  { label: 'Season forecast', icon: <CalendarTodayOutlined /> },
];
const filters = ['All', 'Needs attention', 'Engine', 'Drivetrain'];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box component="section" sx={{ mb: 5 }}>
      <Typography variant="overline" component="h2" sx={{ display: 'block', mb: 1.5 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export default function TestPage() {
  const [page, setPage] = useState('Garage');
  const [filter, setFilter] = useState('All');

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{ width: DRAWER_WIDTH, flexShrink: 0, '& .MuiDrawer-paper': { width: DRAWER_WIDTH, p: 2 } }}
      >
        <Typography variant="h1" sx={{ fontSize: '1.75rem', mb: 3, mt: 1 }}>
          Hourmeter
        </Typography>
        <List sx={{ display: 'grid', gap: 0.5 }}>
          {nav.map((item) => (
            <ListItemButton key={item.label} selected={page === item.label} onClick={() => setPage(item.label)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, md: 6 }, maxWidth: 1200 }}>
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'flex-start', mb: 5 }}>
          <Box>
            <Breadcrumbs sx={{ mb: 1 }}>
              <Link href="#">Garage</Link>
              <Typography color="text.secondary">KTM 300 XC-W</Typography>
            </Breadcrumbs>
            <Typography variant="h1">Component test</Typography>
            <Typography color="text.secondary">3 vehicles · 4 items need attention</Typography>
          </Box>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined">Add vehicle</Button>
            <Button variant="contained">Log ride</Button>
          </Stack>
        </Stack>

        <Section title="Stat cards">
          <Grid container spacing={2}>
            {[
              ['Needs attention', '4', '1 overdue, 3 due soon'],
              ['Hours this season', '64.5 h', 'Across 3 vehicles'],
              ['Avg cost per ride', '$15.27', 'Mean of all vehicles'],
              ['Parts tracked', '22', 'Across 3 vehicles'],
            ].map(([label, value, caption]) => (
              <Grid key={label} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card>
                  <CardContent>
                    <Typography variant="overline">{label}</Typography>
                    <Typography variant="stat">{value}</Typography>
                    <Typography variant="body2" color="text.secondary">{caption}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Section>

        <Section title="Vehicle cards: status chips + progress">
          <Grid container spacing={2}>
            {[
              { name: 'KTM 300 XC-W', hours: '126.4', color: 'error', status: 'Overdue', next: 'Spark plug', note: '0.4 h over', value: 100 },
              { name: 'Honda CRF450R', hours: '84.9', color: 'warning', status: 'Due soon', next: 'Engine oil', note: '1.2 h left', value: 88 },
              { name: 'Kawasaki KLX110', hours: '21.3', color: 'success', status: 'On schedule', next: 'Air filter', note: '6.1 h left', value: 25 },
            ].map((v) => (
              <Grid key={v.name} size={{ xs: 12, md: 4 }}>
                <Card>
                  <CardContent>
                    <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                      <Box>
                        <Typography variant="h3">{v.name}</Typography>
                        <Typography variant="body2" color="text.secondary">4-stroke · 450 cc</Typography>
                      </Box>
                      <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="stat" sx={{ fontSize: '2rem' }}>{v.hours}</Typography>
                        <Typography variant="body2" color="text.secondary">total hours</Typography>
                      </Box>
                    </Stack>
                    <Chip sx={{ my: 2 }} color={v.color as 'error' | 'warning' | 'success'} label={v.status} />
                    <Stack direction="row" sx={{ justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2">Next: {v.next}</Typography>
                      <Typography variant="body2" color="text.secondary">{v.note}</Typography>
                    </Stack>
                    <LinearProgress variant="determinate" value={v.value} color={v.color as 'error' | 'warning' | 'success'} />
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="body2" color="text.secondary">Cost / ride <b>$18.40</b></Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Section>

        <Section title="Filter pills (clickable chips)">
          <Stack direction="row" spacing={1.5} sx={{ flexWrap: 'wrap', rowGap: 1.5 }}>
            {filters.map((f) => (
              <Chip
                key={f}
                clickable
                color="primary"
                label={f}
                variant={filter === f ? 'filled' : 'outlined'}
                onClick={() => setFilter(f)}
              />
            ))}
          </Stack>
        </Section>

        <Section title="Table">
          <Card>
            <CardContent>
              <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
                <Typography variant="h2">Needs attention</Typography>
                <Link href="#">View full schedule</Link>
              </Stack>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Item</TableCell>
                    <TableCell>Vehicle</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Remaining</TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[
                    ['Spark plug', 'KTM 300 XC-W', 'error', 'Overdue', '0.4 h over'],
                    ['Air filter clean', 'KTM 300 XC-W', 'warning', 'Due soon', '0.6 h'],
                    ['Engine oil', 'Honda CRF450R', 'warning', 'Due soon', '1.2 h'],
                  ].map(([item, vehicle, color, status, left]) => (
                    <TableRow key={item}>
                      <TableCell sx={{ fontWeight: 500 }}>{item}</TableCell>
                      <TableCell>{vehicle}</TableCell>
                      <TableCell><Chip color={color as 'error' | 'warning'} label={status} /></TableCell>
                      <TableCell>{left}</TableCell>
                      <TableCell align="right"><Button size="small" variant="outlined">Log service</Button></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Section>

        <Section title="Rated vs actual (stacked bars) + list">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Card>
                <CardContent>
                  <Typography variant="h2" sx={{ mb: 2 }}>Rated vs your actual life</Typography>
                  {[['Piston & rings', 82], ['Spark plug', 83]].map(([name, pct]) => (
                    <Box key={name} sx={{ mb: 2 }}>
                      <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>{name}</Typography>
                      <LinearProgress variant="determinate" value={100} sx={{ height: 8, mb: 0.5, '& .MuiLinearProgress-bar': { backgroundColor: '#d0c8bc' } }} />
                      <LinearProgress variant="determinate" value={pct as number} />
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Card>
                <CardContent>
                  <Typography variant="h2">Recent activity</Typography>
                  <List disablePadding>
                    {[['Ride · 2.4 h', 'Nov 9 · Mud', '$27.90'], ['Ride · 1.8 h', 'Nov 2 · Trail', '$11.00']].map(([a, b, c]) => (
                      <Box key={a}>
                        <Divider />
                        <ListItem disableGutters secondaryAction={<Typography variant="body2">{c}</Typography>}>
                          <ListItemText primary={a} secondary={b} slotProps={{ primary: { sx: { fontWeight: 500 } } }} />
                        </ListItem>
                      </Box>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Section>

        <Section title="Typography + form field + buttons">
          <Stack spacing={1.5} sx={{ maxWidth: 420 }}>
            <Typography variant="h1">h1 Garage</Typography>
            <Typography variant="h2">h2 Section heading</Typography>
            <Typography variant="h3">h3 Card title</Typography>
            <Typography>body1 uses Roboto.</Typography>
            <Typography variant="body2" color="text.secondary">body2 secondary text.</Typography>
            <TextField label="Hours" defaultValue="2.4" />
            <Stack direction="row" spacing={1.5}>
              <Button size="small" variant="contained">Small</Button>
              <Button variant="contained">Medium</Button>
              <Button size="large" variant="contained" color="secondary">Large</Button>
            </Stack>
          </Stack>
        </Section>
      </Box>
    </Box>
  );
}
