import styled from 'styled-components'

export const Form = styled.form<{
  children?: React.ReactNode
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}>`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${({ theme }) => theme.cores.secundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const Campo = styled.input<{
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
}>`
  padding: 0 16px;
  outline-color: ${({ theme }) => theme.cores.principal};
`

export const BotaoPesquisar = styled.button<{
  type?: string
  children?: React.ReactNode
}>`
  background-color: ${({ theme }) => theme.cores.principal};
  border: 1px solid ${({ theme }) => theme.cores.principal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${({ theme }) => theme.cores.secundaria};
  margin-left: 8px;
  cursor: pointer;
`
