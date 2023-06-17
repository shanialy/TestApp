import { Box,Grid, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { AppButton, Layout } from 'components';
import { Question } from 'components/ui/Questioning/Question';
import { Questions } from 'components/ui/Questioning/Questions';
import { useRouter } from 'next/router';
import { ROOT_URL } from 'routes';
import {useState} from 'react'

function Page() {

const [currentQuestion , setCurrentQuestion] = useState(0)

const questions = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Rome', 'Berlin'],
  },
  {
    id: 2,
    question: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
  },
  {
    id: 3,
    question: 'Who painted the Mona Lisa?',
    options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
  },
  {
    id: 4,
    question: 'Which country won the FIFA World Cup in 2018?',
    options: ['France', 'Brazil', 'Germany', 'Spain'],
  },
  {
    id: 5,
    question: 'What is the largest ocean on Earth?',
    options: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
  },
];


  const router = useRouter()
  return (
    <Container>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-around',
        borderBottom: '1px solid lightgrey',
        height: "50px"
      }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 10,
          }}
        >
          <Typography variant='body2' sx={{ fontWeight: 600, fontSize: '1.2rem' }}>TEST MANAGEMENT</Typography>
        </Box>
        <Typography
          variant='body2'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            height: '40px'
          }}
        >
          <AppButton
            onClick={() => {
              router.push(ROOT_URL)
            }}
            title={'Exit Exam'}
            sx={{ mx: 1, backgroundColor: 'red !important' }}
          />
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ height: '100vh', mt:0.2 }}>
        <Grid item xs={12} lg={7} sx={{ borderRight: { lg: '1px solid lightgrey' } }}>
          <Question questions={questions} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}/>
        </Grid>
        <Grid item xs={12} lg={5} sx={{ marginTop: { xl: 2 } }}>
          <Questions questions={questions} currentQuestion={currentQuestion}/>
        </Grid>
      </Grid>
    </Container>
  );
}

Page.getLayout = (page: JSX.Element) => (
  <Layout heading={'TEST MANAGEMENT'}>{page}</Layout>
);

export default Page;
