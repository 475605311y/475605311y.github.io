import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import CodingTools from './pages/CodingTools'
import Hobbies from './pages/Hobbies'
import Home from './pages/Home'
import Photography from './pages/Photography'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="photography" element={<Photography />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="coding-tools" element={<CodingTools />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
