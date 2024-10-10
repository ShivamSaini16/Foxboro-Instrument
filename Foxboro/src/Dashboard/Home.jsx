import { Box, Grid2, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const handleSearch = () => {
    // Handle search logic here
    console.log("Search initiated");
};


const data = [
    {
        image: "https://industry.plantautomation-technology.com/articles/images/heat-exchangers.jpg",
        description: "",
        titel: "Oil Equiment",
        rupees: "$250"
    },
    {
        image: "https://industry.plantautomation-technology.com/articles/images/heat-exchangers.jpg",
        description: "",
        titel: "Tool",
        rupees: "$350"
    },
    {
        image: "https://industry.plantautomation-technology.com/articles/images/heat-exchangers.jpg",
        description: "",
        titel: "Oil Tool",
        rupees: "$450"
    },
    {
        image: "https://industry.plantautomation-technology.com/articles/images/heat-exchangers.jpg",
        description: "",
        titel: "industry",
        rupees: "$550"
    }
]




function Home() {
    return (
        <div>
            <Grid2 container display={'flex'} justifyContent={'space-evenly'} bgcolor={'#3c3154'} p={2}>
                <Typography variant='h4' color='white'>Foxboro Instruments</Typography>
                <Grid2 size={{ xs: 12, md: 12, lg: 5 }}>
                    <TextField
                        variant="outlined"
                        placeholder="Search..."
                        fullWidth
                        size='small'
                        sx={{
                            input: { color: 'white' }, // For text color
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white', // Border color
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white', // Border color on hover
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white', // Border color when focused
                                },
                            },
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleSearch} edge="end">
                                        <SearchIcon sx={{ color: 'white' }} />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid2>
                <Link to='/login' style={{ textDecoration: 'none' }}>
                    <Typography variant='h6' color='white'>Login/Singup</Typography>
                </Link>
            </Grid2>

            <Grid2 container p={4}>
                <Grid2 size={{ xs: 12, md: 12, lg: 12 }} display={'flex'} gap={1}>
                    {
                        data.map((index) => (
                            <Card sx={{ maxWidth: 400 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={index.image}
                                />
                                <CardContent>
                                    <Box display={'flex'} justifyContent={'space-between'}>
                                        <Typography gutterBottom variant="h5" component="div" >
                                            {index?.titel}
                                        </Typography>
                                        <Typography variant="h5">{index?.rupees}</Typography>
                                    </Box>
                                    <Box gap={2}>
                                        <Button size="small" sx={{ backgroundColor: "#d47333" }} variant='contained' fullWidth>
                                            Add Cart
                                        </Button> <Button size="small" sx={{ backgroundColor: "#d47333" }} variant='contained' fullWidth>
                                            Buy
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        ))
                    }
                </Grid2>


            </Grid2>
        </div>
    )
}

export default Home
