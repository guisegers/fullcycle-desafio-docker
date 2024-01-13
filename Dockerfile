FROM golang:latest as builder

WORKDIR /app
COPY main.go .
RUN go build -o desafio_fc main.go

FROM scratch
WORKDIR /app
COPY --from=builder /app /app
CMD [ "./desafio_fc" ]