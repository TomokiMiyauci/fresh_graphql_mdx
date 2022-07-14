# Based on https://github.com/denoland/deno_docker/blob/main/alpine.dockerfile

FROM denoland/deno:1.23.4
EXPOSE 8000

WORKDIR /
COPY . .

CMD ["deno", "run", "-A", "main.ts"]