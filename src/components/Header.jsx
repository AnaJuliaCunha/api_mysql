import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";


export default function Header(){
    return(
        <Container>
            <h1>Header</h1>
            <Box>
                <Tabs>
                <Tab label="Home" value="/" LinkComponent={<Link />} />
                <Tab label="Home" value="/" LinkComponent={<Link />} />
                <Tab label="Home" value="/" LinkComponent={<Link />} />
                <Tab label="Home" value="/" LinkComponent={<Link />} />
                <Tab label="Home" value="/" LinkComponent={<Link />} />
                <Tab label="Home" value="/" LinkComponent={<Link />} />
                <Tab label="Home" value="/" LinkComponent={<Link />} />
                </Tabs>
            </Box>
        </Container>
    )
}