FROM maven:3.6.3-openjdk-11-slim AS MAVEN_BUILD
COPY pom.xml /build/
COPY src /build/src/
WORKDIR /build/
RUN mvn package

FROM openjdk:11-slim
EXPOSE 8081
COPY --from=MAVEN_BUILD build/target/classificados-0.0.1-SNAPSHOT.jar /app/
ENTRYPOINT ["java", "-jar", "app/classificados-0.0.1-SNAPSHOT.jar"]



